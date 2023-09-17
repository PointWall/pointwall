import { useState, useEffect, FormEvent } from 'react'
import { faArrowLeft, faPencil } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'
// Components
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminLayout from '@/components/AdminLayout'
import { TextInput, TextareaInput, ImageInput, CheckboxInput } from '@/components/formComponents'
import { toast } from 'react-hot-toast'
// Styles
import 'react-quill/dist/quill.snow.css'

// interface IFormData {
//   title: string
//   description?: string
//   image?: string
//   // imageCover?: boolean
//   content: string
//   active: boolean
// }

const ReactQuill = dynamic(async () => await import('react-quill'), { ssr: false })

export default function Page (): JSX.Element {
  const [value, setValue] = useState('')
  const [selectedFile, setSelectedFile] = useState<Blob | MediaSource | undefined>(undefined)
  const [preview, setPreview] = useState<string | undefined>(undefined)
  const [imageCover, setImageCover] = useState(false)

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

  async function createArticle (body: any): Promise<any> {
    return await fetch('https://pointwall-api.vercel.app/api/articles', { method: 'POST', body: JSON.stringify(body) })
      .catch(console.error)
  }

  function handleSubmit (ev: FormEvent): void {
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(ev.target as HTMLFormElement)) as any
    formData.active = formData.active === 'on'
    if (formData.description.length === 0) delete formData.description
    if (formData.image.size === 0) delete formData.image
    formData.content = value
    toast.promise(createArticle(formData), { loading: 'Cargando...', error: 'Error, no se puedo crear el artículo', success: 'Artículo creado exitosamente' })
      .catch(console.error)
      .finally(() => {
        const form: any = document.getElementById('article-form')
        if (form !== null) form.reset()
        setValue('')
      })
  }

  return (
    <AdminLayout title='Artículos > Crear'>
      <Link href='/admin/dashboard/articulos' className='w-fit block p-3 mt-2 border space-x-2 border-slate-300 shadow hover:shadow-md rounded-md transition-all active:bg-slate-100'>
        <FontAwesomeIcon icon={faArrowLeft} className='text-slate-600' />
        <span>Volver</span>
      </Link>
      <h1 className='my-4'>Nuevo Artículo</h1>
      <form onSubmit={handleSubmit} id='article-form'>
        <div className='my-4'>
          <label htmlFor='title' className='text-xl'>Título</label>
          <TextInput name='title' required className='block w-1/3 p-2 border border-slate-300 rounded' />
        </div>
        <div className='my-4'>
          <label htmlFor='description' className='text-xl'>Descripción</label>
          <TextareaInput name='description' className='block w-1/3 p-2 border border-slate-300 rounded min-h-[100px] max-h-56' />
        </div>
        <div className='my-4'>
          <label htmlFor='image' className='text-xl'>Imagen</label>
          <ImageInput name='image' onChange={onSelectFile} className='hidden' />
          <label htmlFor='image' className='relative block w-fit border group '>
            <span className='relative block w-screen max-w-xs aspect-video'>
              <Image src={preview !== undefined ? preview : '/images/PointWall.png'} alt='Avatar' fill className={`group-hover:brightness-50 ${imageCover ? 'object-cover' : 'object-contain'}`} />
            </span>
            <FontAwesomeIcon icon={faPencil} className='absolute text-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block' />
          </label>
          <div className='mt-2 flex items-center gap-2 accent-slate-700'>
            <label htmlFor='imgCover'>Cubrir 100%</label>
            <input type='checkbox' id='imgCover' onChange={() => setImageCover((prev) => !prev)} />
          </div>
        </div>
        <div className='my-4'>
          <span className='text-xl'>Contenido</span>
          <div className='md:w-2/3'>
            {ReactQuill !== undefined ? <ReactQuill theme='snow' value={value} onChange={setValue} /> : <p>Cargando editor...</p>}
          </div>
        </div>
        <div className='my-4 accent-slate-700'>
          <label htmlFor='active' className='text-xl'>Activo</label>
          <CheckboxInput name='active' className='block w-5 h-5' />
        </div>
        <button type='submit' className='w-fit block p-3 mt-2 border space-x-2 border-slate-300 shadow hover:shadow-md rounded-md transition-all active:bg-slate-100'>
          Crear
        </button>
      </form>
    </AdminLayout>
  )
}
