// components
import Image from 'next/image'
import Link from 'next/link'

const LINKS = [
  {
    name: 'Artistas',
    url: '/artistas',
    footerBg: 'red'
  },
  {
    name: 'Orígen Histórico',
    url: '/origen',
    footerBg: 'orange'
  },
  {
    name: 'Proyecto',
    url: '/proyecto',
    footerBg: 'yellow'
  },
  {
    name: 'Nosotros',
    url: '/nosotros',
    footerBg: 'green'
  },
  {
    name: 'Contribución',
    url: '/contribucion',
    footerBg: 'pink'
  },
  {
    name: 'Contacto',
    url: '/contacto',
    footerBg: 'white'
  }
]

export default function Footer (): JSX.Element {
  return (
    <footer className='bg-red-300 py-4 px-24'>
      <div className='flex'>
        <div className='flex flex-col items-center'>
          <Image src='/images/PointWall.png' alt='logo' width={75} height={75} className='border-x border-y border-black p-2 rounded-full' />
          <p className='w-max'>PointWall © 2023</p>
        </div>
        <div className='w-full'>
          <ul className='flex justify-evenly'>
            {LINKS.map((link) => (
              <li key={link.url} className='hover:underline'>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='text-center my-2'>
        Realizado por Alejo Ballesteros, Gastón Fariña, Diego Merlo, Mateo Sanzone,
        Teo Forneron, Gabriel Lombardi
      </p>
      <p className='text-center'>Sitio web desarrollado por Lucas Piputto, Ramiro Reinaldo, Gino Somigliana</p>
    </footer>
  )
}
