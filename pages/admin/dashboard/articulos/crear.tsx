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
        <label className='block my-4'>
          <span>Título</span>
          <input type='text' name='title' className='block p-2 border border-slate-300 rounded' />
        </label>
        <label className='block my-4'>
          <span>Contenido</span>
          <div className='md:w-2/3'>
            {ReactQuill !== undefined ? <ReactQuill theme='snow' value={value} onChange={setValue} /> : <p>Cargando editor...</p>}
          </div>
        </label>
        <button onClick={handleClick} className='w-fit block p-3 mt-2 border space-x-2 border-slate-300 shadow hover:shadow-md rounded-md transition-all active:bg-slate-100'>
          Crear
        </button>
      </form>
    </AdminLayout>
  )
}
