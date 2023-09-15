import { useState, useEffect, FormEvent } from 'react'
import { useSession, signIn } from 'next-auth/react'
import defaultSrc from '@/public/images/avatar-default.webp'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
// components
import Head from 'next/head'
import Image from 'next/image'
import { ImageInput, RadioInputs, TextInput, TextareaInput } from '@/components/formComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Page (): JSX.Element {
  const { data: session, status } = useSession()
  const [selectedFile, setSelectedFile] = useState<Blob | MediaSource | undefined>(undefined)
  const [preview, setPreview] = useState<string | undefined>(undefined)

  const router = useRouter()

  useEffect(() => {
    if (selectedFile === undefined) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  function onSelectFile (e: FormEvent & { target: HTMLInputElement }): void {
    if ((e.target.files == null) || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  function handleSignup (ev: FormEvent): void {
    ev.preventDefault()
    // @ts-expect-error
    const formData = Object.fromEntries(new FormData(ev.target))
    if (formData.username.length === 0) delete formData.username
    if (formData.bio.length === 0) delete formData.bio
    if (formData.name.length === 0) delete formData.name
    // @ts-expect-error
    formData.organization = formData.organization === 'Organización'
    // @ts-expect-error
    if (formData.avatar.size === 0) {
      delete formData.avatar
    } else {
      const reader = new FileReader()
      reader.onloadend = function (file) {
        // @ts-expect-error
        // console.log(file.target.result)
        formData.avatar = file.target?.result
      }
      // @ts-expect-error
      reader.readAsDataURL(selectedFile)
    }
    alert('Agregar datos de sesión')
    console.log(formData)
  }

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

  function redirect (): void {
    router.replace('/').catch(console.error)
  }

  // @ts-expect-error
  if (session?.user.registered === true) {
    return (
      <div className='border w-full max-w-md mx-auto mt-28 p-4 rounded-md shadow-lg'>
        <p>Ya existe una cuenta registrada al mail:</p>
        <div className='flex items-center gap-2 mt-2'>
          <Image
            src={session?.user?.image ?? '/images/PointWall.png'}
            alt='Imagen de perfil'
            width={35}
            height={35}
            className='rounded-full'
          />
          <span>{session.user.email}</span>
        </div>
        <button onClick={redirect} className='bg-blue-500 p-2 rounded-md cursor-pointer text-white mx-auto block w-fit mt-2 hover:bg-blue-600'>Aceptar</button>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Registrarse</title>
      </Head>
      <main className='min-h-[100vh] flex items-center'>
        {status !== 'unauthenticated'
          ? (
            <form onSubmit={handleSignup} className='md:border w-fit md:min-w-[500px] mx-auto px-4 md:px-8 py-4 md:shadow-md md:rounded-md'>
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
              <div className='flex flex-col items-center gap-4 my-2'>
                <div className='w-full md:max-w-[300px]'>
                  <label htmlFor='username'>Nombre de usuario*</label>
                  <TextInput name='username' required className='w-full border rounded-md outline-none px-2 py-1 focus:border-gray-400' />
                </div>
                <div className='w-full md:max-w-[300px]'>
                  <label htmlFor='name'>Nombre</label>
                  <TextInput name='name' defaultValue='Nombre de Google' className='w-full border rounded-md outline-none px-2 py-1 focus:border-gray-400' />
                </div>
                <div className='w-full md:max-w-[300px]'>
                  <label htmlFor='bio'>Bio</label>
                  <TextareaInput name='bio' className='w-full max-h-60 min-h-[80px] border rounded-md outline-none px-2 py-1 focus:border-gray-400' />
                </div>
                <div className='w-full md:max-w-[300px]'>
                  <label htmlFor='avatar'>Avatar</label>
                  <ImageInput name='avatar' onChange={onSelectFile} className='hidden' />
                  <label htmlFor='avatar' className='relative block w-fit border group '>
                    <span>
                      <Image src={preview !== undefined ? preview : defaultSrc} alt='Avatar' width={60} height={60} className='group-hover:brightness-50 object-cover' />
                    </span>
                    <FontAwesomeIcon icon={faPencil} className='absolute text-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block' />
                  </label>
                </div>
                <div className='w-full md:max-w-[300px]'>
                  <label htmlFor='organization'>¿Qué tipo de cuenta estás registrando?</label>
                  <RadioInputs name='organization' options={[{ value: 'Usuario', defaultChecked: true }, { value: 'Organización' }]} className='pl-4 pt-1 accent-orange-300' />
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
      className='flex items-center gap-2 mx-auto text-sm md:text-lg rounded-md bg-blue-700 text-white p-3 hover:bg-blue-800 hover:shadow-inner transition-all active:bg-blue-900'
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
