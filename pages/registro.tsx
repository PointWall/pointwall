import { useSession, signIn } from 'next-auth/react'
// components
import Head from 'next/head'
import Image from 'next/image'
import { TextInput } from '@/components/formComponents'

export default function Page (): JSX.Element {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Registrarse</title>
      </Head>
      <main className='min-h-[100vh] flex items-center'>
        {session !== null
          ? (
            <section className='border w-fit mx-auto p-4 shadow-md rounded-md'>
              <h1 className='text-2xl font-medium text-center'>Registrarse</h1>
              <div className='flex gap-2 items-center'>
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
              </div>
              <div>
                <h3>Nombre de usuario</h3>
                <TextInput name='user' required />
              </div>
            </section>
            )
          : <Component />}
      </main>
    </>
  )
}

function Component (): JSX.Element {
  function handleLogin (): void {
    signIn('google').catch(console.error)
  }

  return (
    <button
      className='mx-auto text-sm md:text-lg'
      onClick={handleLogin}
    >
      <Image
        src='/icons/login-icon.svg'
        alt='login icon'
        width={30}
        height={30}
        className='md:hidden'
      />
      <span className='rounded-md bg-blue-900 text-white p-2'>
        Acceder con Google
      </span>
    </button>
  )
}
