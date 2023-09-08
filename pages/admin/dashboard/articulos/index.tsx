import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminLayout from '@/components/AdminLayout'
import Link from 'next/link'

const TEST_DATA = [
  {
    id: 1,
    title: 'Primer artículo de prueba',
    description: 'Descripción para el primer artículo de PointWall',
    image: null,
    tags: ['Mural', 'Arte moderno'],
    createdAt: '07/09/2023',
    updatedAt: '07/09/2023'
  },
  {
    id: 2,
    title: 'Primer artículo de prueba',
    description: 'Descripción para el primer artículo de PointWall',
    image: null,
    tags: ['Mural', 'Arte moderno'],
    createdAt: '07/09/2023',
    updatedAt: '07/09/2023'
  }
]

function ArticlesTable (): JSX.Element {
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
        {TEST_DATA.map((row) => (
          <tr key={row.id} className='group h-12 cursor-default hover:bg-slate-100'>
            <td className='border border-slate-300 border-t-0 p-2 font-medium text-sm group-last:rounded-bl-md'>{row.id}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.title}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm max-w-xs line-clamp-1 h-12 leading-8'>{row.description}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.image}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.tags.join(', ')}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.createdAt}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm'>{row.updatedAt}</td>
            <td className='border border-slate-300 border-t-0 border-l-0 p-2 font-medium text-sm text-center space-x-2 group-last:rounded-br-md'>
              <FontAwesomeIcon icon={faEdit} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
              <FontAwesomeIcon icon={faTrash} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
            </td>
          </tr>))}
      </tbody>
    </table>
  )
}

export default function Page (): JSX.Element {
  return (
    <AdminLayout title='Artículos'>
      <h1>Acá se muestran los artículos creados y la opción de crear nuevos</h1>
      <Link href='/admin/dashboard/articulos/crear' className='w-fit block p-3 mt-2 border space-x-2 border-slate-300 shadow hover:shadow-md rounded-md transition-all active:bg-slate-100'>
        <FontAwesomeIcon icon={faPlus} className='text-slate-600' />
        <span>Crear</span>
      </Link>
      <ArticlesTable />
    </AdminLayout>
  )
}
