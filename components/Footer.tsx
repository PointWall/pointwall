import { faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'
// components
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// types
import { Color, ColorVariant } from '@/lib/types'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const LINKS = [
  {
    name: 'Proyecto',
    url: '/proyecto'
  },
  {
    name: 'Donaciones',
    url: '/donaciones'
  },
  {
    name: 'Nosotros',
    url: '/nosotros'
  },
  {
    name: 'Contacto',
    url: '/contacto'
  },
  {
    name: 'Términos y Condiciones',
    url: '/terminos-y-condiciones'
  },
  {
    name: 'Políticas de Privacidad',
    url: '/politicas-de-privacidad'
  }
]

function SocialIcons (): JSX.Element {
  return (
    <ul className='flex w-fit mx-auto gap-2 mt-2 mb-6 text-gray-800'>
      <li>
        <Link href='https://x.com/PointWall_ok?t=cJVfl9NM_AXDIDENFCX9Vw&s=08' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram as IconProp} />
        </Link>
      </li>
      <li>
        <Link href='https://www.instagram.com/pointwall_oficial/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faXTwitter as IconProp} />
        </Link>
      </li>
      <li>
        <Link href='https://www.youtube.com/@pointwall2216' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faYoutube as IconProp} />
        </Link>
      </li>
    </ul>
  )
}

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
        </div>
        <div className='block md:hidden -mb-4'><SocialIcons /></div>
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
      <div className='hidden md:block'><SocialIcons /></div>
      <p className='text-center text-xs'>
        PointWall © {new Date().getFullYear()} - Todos los derechos reservados
      </p>
    </footer>
  )
}
