import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminLayout from '@/components/AdminLayout'
import Link from 'next/link'

function ArticlesTable (): JSX.Element {
  return (
    <table className='mt-4 border-separate border-spacing-0'>
      <thead>
        <tr>
          <th className='border rounded-tl-md p-2 font-medium'>ID</th>
          <th className='border border-l-0 p-2 font-medium'>Título</th>
          <th className='border border-l-0 p-2 font-medium'>Descripción</th>
          <th className='border border-l-0 p-2 font-medium'>Imagen</th>
          <th className='border border-l-0 p-2 font-medium'>Etiquetas</th>
          <th className='border border-l-0 p-2 font-medium'>Creado</th>
          <th className='border border-l-0 p-2 font-medium'>Editado</th>
          <th className='border border-l-0 rounded-tr-md p-2 font-medium'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr className='group h-12 cursor-default hover:bg-slate-100'>
          <td className='border p-2 font-medium text-sm group-last:rounded-bl-md'>1</td>
          <td className='border p-2 font-medium text-sm'>Primer artículo de prueba</td>
          <td className='border p-2 font-medium text-sm max-w-xs line-clamp-1 h-12 leading-8'>Descripción del primer artículo de prueba asf asfd asfafasf asf </td>
          <td className='border p-2 font-medium text-sm' />
          <td className='border p-2 font-medium text-sm'>Murales, Arte moderno</td>
          <td className='border p-2 font-medium text-sm'>07/09/2023</td>
          <td className='border p-2 font-medium text-sm'>07/09/2023</td>
          <td className='border p-2 font-medium text-sm text-center space-x-2 group-last:rounded-br-md'>
            <FontAwesomeIcon icon={faEdit} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
            <FontAwesomeIcon icon={faTrash} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
          </td>
        </tr>
        <tr className='group h-12 cursor-default hover:bg-slate-100'>
          <td className='border p-2 font-medium text-sm group-last:rounded-bl-md'>1</td>
          <td className='border p-2 font-medium text-sm'>Primer artículo de prueba</td>
          <td className='border p-2 font-medium text-sm max-w-xs line-clamp-1 h-12 leading-8'>Descripción del primer artículo de prueba asf asfd asfafasf asf </td>
          <td className='border p-2 font-medium text-sm' />
          <td className='border p-2 font-medium text-sm'>Murales, Arte moderno</td>
          <td className='border p-2 font-medium text-sm'>07/09/2023</td>
          <td className='border p-2 font-medium text-sm'>07/09/2023</td>
          <td className='border p-2 font-medium text-sm text-center space-x-2 group-last:rounded-br-md'>
            <FontAwesomeIcon icon={faEdit} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
            <FontAwesomeIcon icon={faTrash} className='bg-slate-300 p-1.5 rounded hover:bg-slate-400' />
          </td>
        </tr>
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
