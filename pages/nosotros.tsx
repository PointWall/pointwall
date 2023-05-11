import Image from 'next/image'
import Layout from '@/components/Layout'

interface Member {
  img: string | null
  name: string
  role: string
  description: string
}

const team: Member[] = [
  {
    img: '/images/PointWall.png',
    name: 'Diego',
    role: 'Project Manager',
    description: 'Estudiante técnico, poliglota, artista, encargado de organizar el proyecto.'
  },
  {
    img: '/images/PointWall.png',
    name: 'Mateo',
    role: 'Project Manager',
    description: 'Estudiante técnico, poliglota, artista, encargado de organizar el proyecto.'
  },
  {
    img: '/images/PointWall.png',
    name: 'Guadalupe',
    role: 'Functional Manager',
    description: 'Docente, Licenciada en Historia, gestora cultural, encargada del acompañamiento pedagógico.'
  },
  {
    img: '/images/PointWall.png',
    name: 'Alejo',
    role: 'Resource Manager',
    description: 'Estudiante técnico y programador, encargado de organizar el desarollo de programación.'
  },
  {
    img: '/images/PointWall.png',
    name: 'Gastón',
    role: 'Program Manager',
    description: 'Estudiante técnico, desarollador web, encargado de asignar los trabajos a los Team Managers'
  },
  {
    img: '/images/PointWall.png',
    name: 'Gabriel',
    role: 'Team Manager',
    description: 'Estudiante técnico, desarollador de javascript, encargado del javascript.'
  },
  {
    img: '/images/PointWall.png',
    name: 'Teo',
    role: 'Team Manager',
    description: 'Estudiante técnico, desarollador de html, encargado de las estructuras html y del css.'
  },
  {
    img: null,
    name: 'Nicolás Pérez',
    role: 'Colaborador',
    description: 'Técnico, desarollador web, programador, colaboró siendo mentor de ideas.'
  },
  {
    img: null,
    name: 'Mateo Ricci',
    role: 'Colaborador',
    description: 'Técnico, desarollador web, analista funcional, colaboró enseñando a subir una página web y ubicarla en la red.'
  }
]

export default function Page (): JSX.Element {
  console.log(team)
  return (
    <Layout>
      <section className='text-center'>
        <h1 className='text-8xl mt-16'>Nosotros</h1>
      </section>
      <section className='flex flex-wrap'>
        {team.map((member) => (
          <div key={member.name} className='flex border-2'>
            <Image
              src={member.img ?? '/images/PointWall.png'}
              alt={`Imagen de ${member.name}`} width={50} height={50}
              className='w-fit'
            />
            <div>
              <h3 className='text-2xl font-bold'>{member.name}</h3>
              <h4 className='font-bold'>{member.role}</h4>
              <p className='max-w-sm'>{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
