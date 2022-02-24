import { UserContextProvider } from 'utils/useUser'
import { Layout } from 'components'

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  )
}

export default MyApp
