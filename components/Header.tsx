import Link from 'next/link'
import LoginButton from './LoginButton'

interface ColorVariant {
  [key: string]: string
}

const LINKS = [
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
    name: 'Nosotros',
    url: '/nosotros',
    color: 'sky'
  },
  {
    name: 'Contribución',
    url: '/contribucion',
    color: 'pink'
  }
]

export default function Header (): JSX.Element {
  const colorVariants: ColorVariant = {
    red: 'hover:text-logoRed after:bg-logoRed',
    orange: 'hover:text-logoOrange after:bg-logoOrange',
    yellow: 'hover:text-logoYellow after:bg-logoYellow',
    green: 'hover:text-logoGreen after:bg-logoGreen',
    sky: 'hover:text-logoBlue after:bg-logoBlue',
    pink: 'hover:text-logoPink after:bg-logoPink'
  }

  return (
    <header>
      <div className='flex '>
        <h1 className='text-8xl font-light px-[.5em] py-[.25em]'>PointWall</h1>
        <LoginButton />
      </div>
      <nav>
        <ul className='bg-black text-white flex justify-around w-full'>
          {LINKS.map((link) => (
            <li key={link.name} className={`nav-link text-xl ${colorVariants[link.color]} transition`}>
              <Link href={link.url} className='nav-link__text'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
