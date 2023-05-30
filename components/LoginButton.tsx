import { useSession, signIn, signOut } from 'next-auth/react'
import { PointwallSession } from '@/types/pointwallSession'

export default function Component (): JSX.Element {
  const { data: session } = useSession()
  const pointwallSession = session as PointwallSession

  function handleLogin (): void {
    signIn('google').catch(console.error)
  }

  function handleLogout (): void {
    signOut().catch(console.error)
  }

  if (session != null) {
    return (
      <section className='text-lg flex center items-center flex-center gap-2'>
        <p className='font-mediumt'>{pointwallSession?.user?.email}</p>
        <button onClick={handleLogout}>Salir</button>
      </section>
    )
  }
  return (
    <button className='text-lg self-start justify-self-start ml-auto mt-6 mr-12 transition p-2 bg-black text-white hover:underline' onClick={handleLogin}>
      Iniciar sesión
    </button>
  )
}
