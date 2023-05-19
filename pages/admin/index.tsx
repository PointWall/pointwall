import { FormEvent } from 'react'

export default function Page (): JSX.Element {
  function handleLogin (ev: FormEvent): void {
    ev.preventDefault()
  }

  return (
    <main className='h-screen flex justify-center items-center'>
      <form onSubmit={handleLogin} className='p-6 border-2 border-slate-700 rounded-xl'>
        <div className='flex flex-col mb-2'>
          <label htmlFor='username'>Nombre de usuario</label>
          <input type='text' id='username' name='username' className='p-1 border-2 border-slate-300 rounded-md focus:border-slate-700 focus:bg-slate-200' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' id='passowrd' name='passowrd' className='p-1 border-2 border-slate-300 rounded-md focus:border-slate-700 focus:bg-slate-200' />
        </div>
        <button type='submit' className='bg-slate-700 text-white p-2 mt-4 rounded-md transition-colors hover:bg-slate-800 active:text-gray-400'>Ingresar</button>
      </form>
    </main>
  )
}
