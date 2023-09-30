import { createContext, useContext, useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const UserContext = createContext(null)

export function useUser() {
  return useContext(UserContext)
}

export function UserProvider({ children }: any): JSX.Element {
  const { data } = useSession()
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function handleLogin (): void {
    signIn('google').catch(console.error)
  }

  function handleLogout (): void {
    signOut().catch(console.error)
  }

  // function signUp(email, password) {
  //   return auth.createUserWithEmailAndPassword(email, password)
  // }

  function getUser() {
    return data
  }

  // function isAdmin() {
  //   return auth.currentUser.getIdTokenResult()
  //   .then((idTokenResult) => {
  //     if (!!idTokenResult.claims.admin) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  // }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    getUser,
    login,
    signOut,
    signUp
  }

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  )

}