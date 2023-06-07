import { useState } from 'react'
// components
import Link from 'next/link'
import LoginButton from './LoginButton'
// types
import { Color, ColorVariant } from '@/lib/types'
import HambMenu from './HambMenu'

interface LinkI {
  name: string
  url: string
  color: Color
}

const LINKS: LinkI[] = [
  {
    name: 'Home',
    url: '/',
    color: 'red'
  },
  {
    name: 'Buscador',
    url: '/buscador',
    color: 'orange'
  },
  {
    name: 'Orígen Histórico',
    url: '/origen',
    color: 'yellow'
  },
  {
    name: 'Proyecto',
    url: '/proyecto',
    color: 'green'
  },
  {
    name: 'Contribución',
    url: '/contribucion',
    color: 'blue'
  },
  {
    name: 'Nosotros',
    url: '/nosotros',
    color: 'pink'
  }
]

export default function Header (): JSX.Element {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const colorVariants: ColorVariant = {
    red: 'hover:text-logoRed after:bg-logoRed',
    orange: 'hover:text-logoOrange after:bg-logoOrange',
    yellow: 'hover:text-logoYellow after:bg-logoYellow',
    green: 'hover:text-logoGreen after:bg-logoGreen',
    blue: 'hover:text-logoBlue after:bg-logoBlue',
    pink: 'hover:text-logoPink after:bg-logoPink'
  }

  function handleHambMenuClick (): void {
    setIsMenuVisible((isVisible) => !isVisible)
  }

  return (
    <header>
      <div className='relative flex items-center p-4 gap-4 bg-white z-20'>
        <h1 className='text-2xl md:text-8xl font-light'>PointWall</h1>
        <LoginButton />
        <span onClick={handleHambMenuClick} className='md:hidden'>
          <HambMenu />
        </span>
      </div>
      <nav>
        <ul className='css-desktop-header bg-black text-white flex justify-around w-full lg'>
          {LINKS.map((link) => (
            <li key={link.name} className={`css-nav-link text-xl ${colorVariants[link.color]} transition`}>
              <Link href={link.url} className='css-nav-link__text'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`css-mobile-header ${isMenuVisible ? '' : '-translate-y-full'} absolute w-full shadow-lg bg-black text-white flex flex-col px-4 py-2 z-10`}>
          {LINKS.map((link) => (
            <li key={link.name} className='css-nav-link transition'>
              <Link href={link.url} className='css-nav-link__text'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
