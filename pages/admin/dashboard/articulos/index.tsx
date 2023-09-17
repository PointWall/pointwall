import { useEffect, useState } from 'react'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminLayout from '@/components/AdminLayout'
import Link from 'next/link'

function ArticlesTable ({ articles }: { articles?: any }): JSX.Element {
  return (
    <table className='mt-4 border-separate border-spacing-0'>
      <thead>
        <tr className='bg-slate-200'>
          <th className='border border-slate-400 rounded-tl-md p-2 font-medium'>ID</th>
          <th className='border border-slate-400 border-l-0 p-2 font-medium'>Título</th>
          <th className='border border-slate-400 border-l-0 p-2 font-medium'>Descripción</th>
          <th className='border border-slate-400 border-l-0 p-2 font-medium'>Imagen</th>
          <th className='border border-slate-400 border-l-0 p-2 font-medium'>Etiquetas</th>
          <th className='border border-slate-400 border-l-0 p-2 font-medium'>Creado</th>
          <th className='border border-slate-400 border-l-0 p-2 font-medium'>Editado</th>
          <th className='border border-slate-400 border-l-0 rounded-tr-md p-2 font-medium'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((row: any) => (
          <tr key={row.id} className='group h-12 cursor-default hover:bg-slate-100'>
            <td className='border border-slate-300 border-t-0 p-2 font-medium text-sm group-last:rounded-bl-md text-center'>{row.id}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.title}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm max-w-xs line-clamp-1 h-12 leading-8'>{row.description}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.image}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.tags.join(', ')}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{new Date(row.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{new Date(row.updatedAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm group-last:rounded-br-md'>
              <div className='flex justify-center gap-2'>
                <FontAwesomeIcon icon={faEdit} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
                <FontAwesomeIcon icon={faTrash} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
              </div>
            </td>
          </tr>))}
      </tbody>
    </table>
  )
}

export default function Page (): JSX.Element {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  useEffect(() => {
    async function fetchArticles (): Promise<any> {
      const res = await fetch('https://pointwall-api.vercel.app/api/articles')
      const { data, error } = await res.json()
      setIsLoading(false)
      if (error !== undefined) return setErrorMessage(error)
      setArticles(data)
    }
    setIsLoading(true)
    fetchArticles().catch(console.error)
  }, [])

  return (
    <AdminLayout title='Artículos'>
      <h1>Acá se muestran los artículos creados y la opción de crear nuevos</h1>
      {errorMessage !== undefined ? <p>{errorMessage}</p> : <></>}
      <Link href='/admin/dashboard/articulos/crear' className='w-fit block p-3 mt-2 border space-x-2 border-slate-300 shadow hover:shadow-md rounded-md transition-all active:bg-slate-100'>
        <FontAwesomeIcon icon={faPlus} className='text-slate-600' />
        <span>Crear</span>
      </Link>
      {isLoading ? <div className='flex justify-center my-4'><span className='block w-12 h-12 border-[3px] border-blue-500 rounded-full border-t-transparent animate-spin' /></div> : <ArticlesTable articles={articles} />}
    </AdminLayout>
  )
}
