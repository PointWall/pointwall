import AdminLayout from '@/components/AdminLayout'
import type { InferGetStaticPropsType, GetStaticPropsResult } from 'next'

export async function getStaticProps (): Promise<GetStaticPropsResult<any>> {
  return {
    props: {
      data: {
        usersCount: 10,
        postsCount: 10,
        pointsCount: 10,
        tagsCount: 10,
        imagesCount: 10
      }
    }
  }
}

function StatCard ({ title, value }: { title: string, value: string | number | boolean }): JSX.Element {
  return (
    <div className='p-4 border rounded-md'>
      <h4 className='text-sm text-gray-600'>{title}</h4>
      <p className='text-xl font-medium'>{value}</p>
    </div>
  )
}

export default function Page ({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <AdminLayout title='Inicio'>
      <p>Acá se muestra información básica del panel</p>
      <article>
        <h2 className='text-2xl font-medium mb-4 mt-6'>Usuarios</h2>
        <div className='grid grid-cols-4 gap-4'>
          <StatCard title='Usuarios registrados' value={data.usersCount ?? '-'} />
        </div>
      </article>
      <article>
        <h2 className='text-2xl font-medium mb-4 mt-6'>Posts</h2>
        <div className='grid grid-cols-4 gap-4'>
          <StatCard title='Posts aceptados' value={data.pointsCount ?? '-'} />
          <StatCard title='Posts pendientes' value={data.postsCount ?? '-'} />
          <StatCard title='Tags creados' value={data.tagsCount ?? '-'} />
        </div>
      </article>
      <article>
        <h2 className='text-2xl font-medium mb-4 mt-6'>Imágenes</h2>
        <div className='grid grid-cols-4 gap-4'>
          <StatCard title='Imagenes subidas' value={data.imagesCount ?? '-'} />
        </div>
      </article>
    </AdminLayout>
  )
}
