import Image from 'next/image'
import Link from 'next/link'

const DASHBOARD_SECTIONS = [
  {
    name: 'Inicio',
    path: '/',
    icon: '/icons/panel-home.svg',
  },
  {
    name: 'Solicitudes',
    path: '/solicitudes',
    icon: '/icons/panel-email.svg'
  },
  {
    name: 'Ubicaciones',
    path: '/ubicaciones',
    icon: '/icons/panel-location.svg'
  },
]

interface AdminLayoutProps {
  children: JSX.Element | JSX.Element[]
  title: string
}

export default function AdminLayout(props: AdminLayoutProps): JSX.Element {
  return (
    <div className='flex'>
      <section className='min-h-screen w-1/5 bg-slate-800 text-white'>
        <div className='flex items-center gap-2 bg-slate-900 p-4'>
          <Image
            src='/images/PointWall.png'
            alt='Pointwall Logo'
            height={50}
            width={50}
          />
          <p className='text-xl font-semibold tracking-wide'>Administrador</p>
        </div>
        <div className='p-4'>
          <h2 className='mb-2 text-xl font-normal'>Menú</h2>
          <ul className='space-y-2'>
            {DASHBOARD_SECTIONS.map((section) => (
              <li key={section.name}>
                <Link
                  href={`/admin/dashboard${section.path}`}
                  replace={false}
                  className='flex w-fit gap-2 text-lg hover:underline'
                >
                  <Image
                    src={section.icon}
                    alt={section.icon}
                    width={25}
                    height={25}
                  />
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='w-4/5'>
        <header className='h-[82px] border-b flex items-center'>
          <h1 className='ml-8 text-4xl font-medium'>{props.title}</h1>
        </header>
        <div className='p-8'>{props.children}</div>
      </section>
    </div>
  )
}
