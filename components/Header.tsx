import Link from 'next/link'

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
    name: 'Artistas',
    url: '/artistas',
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
    red: 'hover:text-red-500 after:bg-red-500',
    orange: 'hover:text-orange-500 after:bg-orange-500',
    yellow: 'hover:text-yellow-500 after:bg-yellow-500',
    green: 'hover:text-green-500 after:bg-green-500',
    sky: 'hover:text-sky-500 after:bg-sky-500',
    pink: 'hover:text-pink-500 after:bg-pink-500'
  }

  return (
    <header>
      <h1 className='text-8xl font-light px-[.5em] py-[.25em]'>PointWall</h1>
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
