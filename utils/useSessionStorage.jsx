const useSessionStorage__ = () => {
  const getSessionStorageItem = key => window.getItem(key)

  const setSessionStorageItem = (key, value) =>
    window.sessionStorage.setItem(key, value)

  const removeSessionStorageItem = key => window.sessionStorage.removeItem(key)

  const clearSessionStorage = () => window.sessionStorage.clear()

  return {
    getSessionStorageItem,
    setSessionStorageItem,
    removeSessionStorageItem,
    clearSessionStorage,
  }
}

export const useSessionStorage = () => {
  const isBrowser = (() => typeof window !== 'undefined')()

  const getSessionStorageItem = key => {
    return isBrowser ? window.sessionStorage.getItem(key) : ''
  }

  const setSessionStorageItem = (key, value) => {
    if (isBrowser) {
      window.sessionStorage.setItem(key, value)
      return true
    }

    return false
  }

  const removeSessionStorageItem = key => {
    if (isBrowser) {
      window.sessionStorage.removeItem(key)
      return true
    }

    return false
  }

  const clearSessionStorage = () => {
    if (isBrowser) {
      window.sessionStorage.clear()
    }
  }

  return {
    getSessionStorageItem,
    setSessionStorageItem,
    removeSessionStorageItem,
    clearSessionStorage,
  }
}
