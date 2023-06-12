import Image from 'next/image'
import { FormEvent } from 'react'

export default function Page (): JSX.Element {
  function handleLogin (ev: FormEvent): void {
    ev.preventDefault()
  }

  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <section className='flex flex-col items-center gap-4 rounded-xl border border-slate-200 p-6 shadow-lg'>
        <h1>
          <span className='relative block h-20 w-20'>
            <Image src='/images/PointWall.png' alt='logo PointWall' fill />
          </span>
        </h1>
        <form onSubmit={handleLogin} className=''>
          <div className='mb-2 flex flex-col'>
            <label htmlFor='username'>Nombre de usuario</label>
            <input
              type='text'
              id='username'
              name='username'
              className='rounded-md border border-slate-300 p-1 px-2 focus:border-slate-700 focus:bg-slate-100'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password'>Contraseña</label>
            <input
              type='password'
              id='passowrd'
              name='passowrd'
              className='rounded-md border border-slate-300 p-1 px-2 focus:border-slate-700 focus:bg-slate-100'
            />
          </div>
          <button
            type='submit'
            className='mt-4 w-full rounded-md bg-slate-700 p-2 text-white shadow-md shadow-zinc-200 transition-colors hover:bg-slate-800 active:text-gray-400'
          >
            Ingresar
          </button>
        </form>
      </section>
    </main>
  )
}
