import { useSession, signIn, signOut } from 'next-auth/react'
import { PointwallSession } from '@/types/pointwallSession'
import Image from 'next/image'

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
        <p className='font-medium'>{pointwallSession?.user?.email}</p>
        <button onClick={handleLogout}>Salir</button>
      </section>
    )
  }

  return (
    <button className='text-sm md:text-lg md:self-start ml-auto' onClick={handleLogin}>
      <Image src='/icons/login-icon.svg' alt='login icon' width={25} height={25} className='md:hidden' />
      <span className='bg-black text-white hover:underline hidden transition md:block p-2'>Iniciar sesión</span>
    </button>
  )
}
