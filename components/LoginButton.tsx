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
    return (
      <section className='ml-auto flex items-center gap-2 text-lg'>
        <div className='relative aspect-square w-8 overflow-hidden rounded-full'>
          <Image
            src={pointwallSession?.user?.image ?? '/images/PointWall.png'}
            alt='Imagen de perfil'
            fill
          />
        </div>
        <p className='hidden text-sm md:block'>
          {pointwallSession?.user?.email}
        </p>
        <button
          onClick={handleLogout}
          className='rounded-md bg-black px-2 py-1 text-white'
        >
          Salir
        </button>
      </section>
    )
  }

  return (
    <button
      className='ml-auto text-sm md:self-start md:text-lg'
      onClick={handleLogin}
    >
      <Image
        src='/icons/login-icon.svg'
        alt='login icon'
        width={30}
        height={30}
        className='md:hidden'
      />
      <span className='hidden rounded-md bg-black p-2 text-white transition hover:underline md:block'>
        Iniciar sesión
      </span>
    </button>
  )
}
