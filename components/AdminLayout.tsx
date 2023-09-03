import Image from 'next/image'
import Link from 'next/link'
import { faHome, faMapPin, faEnvelope, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DASHBOARD_SECTIONS = [
  {
    name: 'Inicio',
    path: '/',
    icon: faHome
  },
  {
    name: 'Solicitudes',
    path: '/solicitudes',
    icon: faEnvelope
  },
  {
    name: 'Ubicaciones',
    path: '/ubicaciones',
    icon: faMapPin
  },
  {
    name: 'Artículos',
    path: '/articulos',
    icon: faNewspaper
  }
]

interface AdminLayoutProps {
  children: JSX.Element | JSX.Element[]
  title: string
}

export default function AdminLayout (props: AdminLayoutProps): JSX.Element {
  return (
    <div className='flex'>
      <section className='h-screen w-1/5 relative '>
        <div className='fixed h-full w-1/5 bg-slate-800 text-white'>
          <div className='flex relative items-center gap-2 bg-slate-900 p-4'>
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
                    className='flex items-center w-fit gap-2 text-lg hover:underline'
                  >
                    <FontAwesomeIcon icon={section.icon} className='w-8' />
                    <span>{section.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
