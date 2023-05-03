// components
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
  }
]

export default function Footer (): JSX.Element {
  return (
    <footer>
      <div>
        <div>
          <p>PointWall © 2022</p>
        </div>
        <div>
          <ul>
            {LINKS.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>
        Realizado por Alejo Ballesteros, Gastón Fariña, Diego Merlo, Mateo Sanzone,
        Teo Forneron, Gabriel Lombardi
      </p>
      <p>Sitio web desarrollado por Lucas Piputto, Ramiro Reinaldo, Gino Somigliana</p>
    </footer>
  )
}
