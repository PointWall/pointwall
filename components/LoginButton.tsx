import { useSession, signIn, signOut } from 'next-auth/react'
// import { PointwallSession } from '@/types/pointwallSession'
import Image from 'next/image'

export default function Component (): JSX.Element {
  const { data: session } = useSession()
  const pointwallSession = session

  function handleLogin (): void {
    signIn('google').catch(console.error)
  }

  function handleLogout (): void {
    signOut().catch(console.error)
  }

  if (session != null) {
    console.log(pointwallSession)
    return (
      <section className='text-lg flex center items-center flex-center gap-2 ml-auto'>
        <div className='relative aspect-square w-8 rounded-full overflow-hidden'>
          <Image src={pointwallSession?.user?.image ?? '/images/PointWall.png'} alt='Imagen de perfil' fill />
        </div>
        <p className='text-sm hidden md:block'>{pointwallSession?.user?.email}</p>
        <button onClick={handleLogout} className='bg-black text-white py-1 px-2 rounded-md'>Salir</button>
      </section>
    )
  }

  return (
    <button className='text-sm md:text-lg md:self-start ml-auto' onClick={handleLogin}>
      <Image src='/icons/login-icon.svg' alt='login icon' width={30} height={30} className='md:hidden' />
      <span className='bg-black text-white hover:underline hidden transition md:block p-2 rounded-md'>Iniciar sesión</span>
    </button>
  )
}
