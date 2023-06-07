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

export default function Footer ({
  color = undefined
}: {
  color?: Color
}): JSX.Element {
  const colorVariants: ColorVariant = {
    red: 'bg-logoRed',
    orange: 'bg-logoOrange',
    yellow: 'bg-logoYellow',
    green: 'bg-logoGreen',
    blue: 'bg-logoBlue',
    pink: 'bg-logoPink'
  }

  return (
    <footer className={`${color === undefined ? 'bg-slate-300' : colorVariants[color]} px-12 py-4 md:px-24`}>
      <div className='flex flex-col md:flex-row'>
        <div className='my-4 flex flex-col items-center'>
          <Image
            src='/images/PointWall.png'
            alt='logo'
            width={75}
            height={75}
            className='rounded-full border-x border-y border-black p-2'
          />
          <p className='w-max'>PointWall © 2023</p>
        </div>
        <div className='my-4 flex w-full justify-center'>
          <ul className='flex w-full flex-col items-center justify-evenly gap-4 md:flex-row md:flex-wrap md:items-center md:gap-8'>
            {LINKS.map((link) => (
              <li key={link.url} className='hover:underline'>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <p className='my-2 text-center text-xs'>
        Realizado por Alejo Ballesteros, Gastón Fariña, Diego Merlo, Mateo
        Sanzone, Teo Forneron, Gabriel Lombardi
      </p> */}
      <p className='text-center text-xs'>
        Sitio web desarrollado por Lucas Piputto, Ramiro Reinaldo, Gino
        Somigliana.
      </p>
    </footer>
  )
}
