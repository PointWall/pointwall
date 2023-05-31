// components
import Image from 'next/image'
import Link from 'next/link'
// types
import { Color, ColorVariant } from '@/lib/types'

const LINKS = [
  {
    name: 'Buscador',
    url: '/buscador'
  },
  {
    name: 'Orígen Histórico',
    url: '/origen'
  },
  {
    name: 'Proyecto',
    url: '/proyecto'
  },
  {
    name: 'Nosotros',
    url: '/nosotros'
  },
  {
    name: 'Donaciones',
    url: '/donaciones'
  },
  {
    name: 'Contacto',
    url: '/contacto'
  }
]

export default function Footer ({ color = undefined }: { color?: Color }): JSX.Element {
  const colorVariants: ColorVariant = {
    red: 'bg-logoRed',
    orange: 'bg-logoOrange',
    yellow: 'bg-logoYellow',
    green: 'bg-logoGreen',
    blue: 'bg-logoBlue',
    pink: 'bg-logoPink'
  }

  return (
    <footer className={`${color === undefined ? 'bg-slate-300' : colorVariants[color]} py-4 px-12 md:px-24`}>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col items-center my-4'>
          <Image src='/images/PointWall.png' alt='logo' width={75} height={75} className='border-x border-y border-black p-2 rounded-full' />
          <p className='w-max'>PointWall © 2023</p>
        </div>
        <div className='w-full my-4 flex justify-center'>
          <ul className='flex flex-col items-center md:flex-row md:flex-wrap md:items-center gap-4 md:gap-8 justify-evenly w-full'>
            {LINKS.map((link) => (
              <li key={link.url} className='hover:underline'>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='text-xs text-center my-2'>
        Realizado por Alejo Ballesteros, Gastón Fariña, Diego Merlo, Mateo Sanzone,
        Teo Forneron, Gabriel Lombardi
      </p>
      <p className='text-xs text-center'>Sitio web desarrollado por Lucas Piputto, Ramiro Reinaldo, Gino Somigliana</p>
    </footer>
  )
}
