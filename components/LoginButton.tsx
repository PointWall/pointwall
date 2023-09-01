import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Component (): JSX.Element {
  const { data: session } = useSession()

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
            src={session?.user?.image ?? '/images/PointWall.png'}
            alt='Imagen de perfil'
            fill
          />
        </div>
        <p className='hidden text-sm md:block'>
          {session?.user?.email}
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
      <span className='hidden rounded-md opacity-75 bg-gradient-to-br from-logoBlue to-logoPink hover:to-logoRed hover:opacity-100 shadow-inner hover:shadow-md text-white p-2 transition-all active:to-logoOrange md:block'>
        Iniciar sesión
      </span>
    </button>
  )
}
