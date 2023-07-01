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
    name: 'Inicio',
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
      <div className='container mx-auto'>
      <div className='relative z-20 flex items-center gap-4 p-4' style={{backgroundColor:'#2a9d8f'}}>
        <h1 className='select-none text-white font-back text-3xl' style={{fontWeight:'900',fontFamily:'Poppins'}}> 
          <Link href='/'>PointWall<b className='text-xl'>.com.ar</b></Link>
        </h1>
        <LoginButton />
        <span onClick={handleHambMenuClick} className='md:hidden'>
          <HambMenu isOpen={isMenuVisible} />
        </span>
      </div>

      <nav className='justify-items-center '>
        <ul className='css-desktop-header justify-center text-center flex px-2 text-white' style={{fontFamily:'Poppins',fontWeight:'500',backgroundColor:'#2a9d8f'}}>
          {LINKS.map((link) => (
            <li
              key={link.name}
              className={`css-nav-link text-xl ${
                colorVariants[link.color]
              } transition`}
            >
              <Link href={link.url} className='css-nav-link__text'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={`css-mobile-header ${
            isMenuVisible ? '' : '-translate-y-full'
          } absolute z-10 flex w-full flex-col bg-black px-4 py-2 text-white shadow-lg transition-transform`}
        >
          {LINKS.map((link) => (
            <li key={link.name} className='css-nav-link transition'>
              <Link href={link.url} className='css-nav-link__text'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  )
}
