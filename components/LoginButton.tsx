import { useSession, signIn, signOut } from 'next-auth/react'

export default function Component (): JSX.Element {
  const { data: session } = useSession()

  function handleLogin (): void {
    signIn().catch(console.error)
  }

  function handleLogout (): void {
    signOut().catch(console.error)
  }

  if (session != null) {
    return (
      <>
        Bienvenid@, {session.user?.name} <br />
        <button onClick={handleLogout}>Salir</button>
      </>
    )
  }
  return <button onClick={handleLogin}>Iniciar sesión</button>
}
