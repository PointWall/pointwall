import { useState } from 'react'
// import { useSession } from 'next-auth/react'
// components
import Link from 'next/link'
import LoginButton from './LoginButton'
import HambMenu from './HambMenu'
import Image from 'next/image'
// types
import { Color, ColorVariant } from '@/lib/types'

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
    name: 'Explorar',
    url: '/buscador',
    color: 'orange'
  },
  {
    name: 'Mapa',
    url: '/mapa',
    color: 'green'
  },
  {
    name: 'Artículos',
    url: '/articulos',
    color: 'yellow'
  },
  {
    name: 'Contribución',
    url: '/contribucion',
    color: 'blue'
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
      <div className='relative z-20 flex items-center gap-4 bg-white p-4'>
        <Link href='/' className='flex gap-2 items-center group'>
          <Image src='/images/PointWall.png' alt='logo' width={50} height={50} className='inline-block w-10 h-10 md:w-auto md:h-auto' />
          <div className='overflow-hidden'>
            <h1 className='inline-block font-light text-xl md:text-3xl md:group-hover:animate-[rollUp_.5s_ease-in-out]'>PointWall</h1>
          </div>
        </Link>
        <LoginButton />
        {/* {session === null &&
          <Link href='/registro' className='hidden rounded-md bg-logoOrange hover:bg-white hover:text-logoOrange hover:shadow-[0px_0px_0px_2px] text-white p-2 transition-all md:block active:bg-orange-50'>
            Registrarse
          </Link>} */}
        <span onClick={handleHambMenuClick} className='md:hidden'>
          <HambMenu isOpen={isMenuVisible} />
        </span>
      </div>
      <nav>
        <ul className='css-desktop-header flex w-full justify-evenly text-black py-2 shadow-[inset_0px_0px_5px_-2px_rgba(0,0,0,0.3)]'>
          {LINKS.map((link) => (
            <li
              key={link.name}
              className={`css-nav-link text-xl ${
                colorVariants[link.color]
              } transition after:rounded-md`}
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
    </header>
  )
}
