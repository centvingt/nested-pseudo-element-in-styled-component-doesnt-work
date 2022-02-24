import jwt_decode from 'jwt-decode'

import { useEffect, useState, createContext, useContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = props => {
  const [token, setToken] = useState(null)
  const [decodedToken, setDecodedToken] = useState(null)
  const [decodedTokenIsLoaded, setDecodedTokenIsLoaded] = useState(false)

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('token')

    try {
      if (!tokenFromLocalStorage) throw 'No token stored in localStorage'
      else setToken(tokenFromLocalStorage)
    } catch (error) {
      console.warn(error)
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      if (token) {
        try {
          let { exp } = jwt_decode(token)

          if (isExpired(exp)) {
            let refreshedToken = await getRefreshedToken(token)
            setToken(refreshedToken)
            return
          }

          setDecodedToken(jwt_decode(token))
          setDecodedTokenIsLoaded(true)
          return
        } catch (error) {
          console.error(error)
        }
      }
      setDecodedTokenIsLoaded(true)
    })()
  }, [token])

  const signIn = async payload => {
    // Poster la requête à /auth/local
    try {
      const { email, password } = payload

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: email,
            password,
          }),
        }
      )

      const json = await response.json()
      console.log('useUser.jsx > json >', json)

      if (json.error) throw json.error.message

      if (json.jwt) {
        localStorage.setItem('token', json.jwt)

        const receivedDecodedToken = jwt_decode(json.jwt)
        setDecodedToken(receivedDecodedToken)
      }
    } catch (error) {
      console.error('useUser.jsx > error >', error)
      throw error
    }
  }

  const checkTokenExpiration = async () => {
    if (decodedToken) {
      if (isExpired(decodedToken.exp) && token) {
        let refreshedToken = await getRefreshedToken(token)
        setToken(refreshedToken)
        return true
      }
      return true
    }
    return false
  }

  const value = {
    token,
    decodedToken,
    decodedTokenIsLoaded,
    checkTokenExpiration,
    signIn,
    signUp: payload => {},
    signOut: () => {
      localStorage.removeItem('token')
      setDecodedToken(null)
      setDecodedTokenIsLoaded(false)
    },
    getDecodedToken: () => {
      console.log('useUser ~> getDecodedToken ~> decodedToken ~>', decodedToken)
      if (decodedToken && isExpired(decodedToken.exp)) {
        ;(async () => {
          setDecodedTokenIsLoaded(true)

          const tokenFromLocalStorage = await getTokenFromLocalStorage()

          if (tokenFromLocalStorage) {
            const newDecodedToken = jwt_decode(tokenFromLocalStorage)
            setDecodedToken(newDecodedToken)

            setDecodedTokenIsLoaded(false)

            return newDecodedToken
          } else {
            setDecodedTokenIsLoaded(false)

            return null
          }
        })()
      }

      return decodedToken
    },
  }
  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}

const isExpired = exp => Date.now() / 1000 > exp

const getRefreshedToken = async token => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }
    )

    const json = await response.json()

    if (json.message) throw json.message[0].messages[0].id

    if (!json.jwt) throw 'No JWT returned by server.'

    return json.jwt
  } catch (error) {
    console.error(error)
    localStorage.removeItem('token')
    return null
  }
}
