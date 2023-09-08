import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminLayout from '@/components/AdminLayout'
import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(async () => await import('react-quill'), { ssr: false })

export default function Page (): JSX.Element {
  const [value, setValue] = useState('')

  function handleClick (): void {
    console.log(value)
  }

  return (
    <AdminLayout title='Artículos > Crear'>
      <Link href='/admin/dashboard/articulos' className='w-fit block p-3 mt-2 border space-x-2 border-slate-300 shadow hover:shadow-md rounded-md transition-all active:bg-slate-100'>
        <FontAwesomeIcon icon={faArrowLeft} className='text-slate-600' />
        <span>Volver</span>
      </Link>
      <h1 className='my-4'>Nuevo Artículo</h1>
      <form>
        <div className='my-4'>
          <label htmlFor='title' className='text-xl'>Título</label>
          <input type='text' name='title' id='title' className='block w-1/3 p-2 border border-slate-300 rounded' />
        </div>
        <div className='my-4'>
          <label htmlFor='description' className='text-xl'>Descripción</label>
          <textarea name='description' id='description' className='block w-1/3 p-2 border border-slate-300 rounded' />
        </div>
        <div className='my-4'>
          <label htmlFor='image' className='text-xl'>Imagen</label>
          <input type='file' accept='image/*' id='image' name='image' className='block p-2 border border-slate-300 rounded' />
        </div>
        <div className='my-4'>
          <span className='text-xl'>Contenido</span>
          <div className='md:w-2/3'>
            {ReactQuill !== undefined ? <ReactQuill theme='snow' value={value} onChange={setValue} /> : <p>Cargando editor...</p>}
          </div>
        </div>
        <div className='my-4'>
          <label htmlFor='active' className='text-xl'>Activo</label>
          <input type='checkbox' name='active' id='active' className='block w-5 h-5 accent-slate-700' />
        </div>
        <button onClick={handleClick} className='w-fit block p-3 mt-2 border space-x-2 border-slate-300 shadow hover:shadow-md rounded-md transition-all active:bg-slate-100'>
          Crear
        </button>
      </form>
    </AdminLayout>
  )
}
