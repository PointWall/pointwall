import { useSession, signIn } from 'next-auth/react'
// components
import Head from 'next/head'
import Image from 'next/image'
import { ImageInput, RadioInputs, TextInput, TextareaInput } from '@/components/formComponents'
import { FormEvent } from 'react'

export default function Page (): JSX.Element {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <>
        <Head><title>Registrarse</title></Head>
        <main className='h-screen w-screen grid place-items-center'>
          <Image src='/images/PointWall.png' width={150} height={150} alt='logo PointWall' className='animate-pulse' />
        </main>
      </>
    )
  }

  function handleSignup (ev: FormEvent): void {
    ev.preventDefault()
    console.log(ev)
    // @ts-expect-error
    const formData = Object.fromEntries(new FormData(ev.target))
    console.log({ formData })
  }

  return (
    <>
      <Head>
        <title>Registrarse</title>
      </Head>
      <main className='min-h-[100vh] flex items-center'>
        {status !== 'unauthenticated'
          ? (
            <form onSubmit={handleSignup} className='md:border w-fit mx-auto px-4 md:px-8 py-4 md:shadow-md md:rounded-md'>
              <h1 className='text-2xl font-medium text-center'>Registrarse</h1>
              <div className='flex gap-2 items-center mx-auto w-fit my-3'>
                <div className='relative aspect-square w-8 overflow-hidden rounded-full'>
                  <Image
                    src={session?.user?.image ?? '/images/PointWall.png'}
                    alt='Imagen de perfil'
                    fill
                  />
                </div>
                <p className='text-sm block'>
                  {session?.user?.email}
                </p>
              </div>
              <div className='space-y-4 my-2'>
                <div>
                  <label htmlFor='username'>Nombre de usuario*</label>
                  <TextInput name='username' required className='w-full md:max-w-[300px] border rounded-md outline-none px-2 py-1 focus:border-gray-400' />
                </div>
                <div>
                  <label htmlFor='name'>Nombre</label>
                  <TextInput name='name' className='w-full md:max-w-[300px] border rounded-md outline-none px-2 py-1 focus:border-gray-400' />
                </div>
                <div>
                  <label htmlFor='bio'>Bio</label>
                  <TextareaInput name='bio' className='w-full md:max-w-[300px] border rounded-md outline-none px-2 py-1 focus:border-gray-400' />
                </div>
                <div>
                  <label htmlFor='avatar'>Avatar</label>
                  <ImageInput name='avatar' />
                </div>
                <div>
                  <label htmlFor='organization'>Cuenta de una organización</label>
                  <RadioInputs name='organization' options={['No', 'Si']} className='pl-4 pt-1 accent-orange-300' />
                </div>
                <button type='submit' className='block w-full md:w-fit mx-auto text-white bg-logoOrange p-2 rounded-md hover:bg-orange-400 transition-colors active:bg-orange-500'>
                  Crear cuenta
                </button>
              </div>
            </form>
            )
          : <GoogleSignup />}
      </main>
    </>
  )
}

function GoogleSignup (): JSX.Element {
  function handleLogin (): void {
    signIn('google').catch(console.error)
  }

  return (
    <button
      className='flex items-center gap-2 mx-auto text-sm md:text-lg rounded-md bg-blue-700 text-white p-2 hover:bg-blue-800 hover:shadow-inner transition-all active:bg-blue-900'
      onClick={handleLogin}
    >
      <Image
        src='/icons/google-icon.svg'
        alt='login icon'
        width={30}
        height={30}
      />
      <span className=''>
        Acceder con Google
      </span>
    </button>
  )
}
