// components
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Title } from '@/components/utils'

interface Member {
  img: string | null
  name: string
  description: string
}

interface Team {
  name: string
  members: Member[]
}

const team: Team[] = [
  {
    name: 'Project Managers',
    members: [
      {
        img: '/images/foto_diego.jpeg',
        name: 'Diego',
        description: 'Estudiante técnico, poliglota, artista, encargado de organizar el proyecto.'
      },
      {
        img: '/images/foto_gaston.png',
        name: 'Gastón',
        description: 'Estudiante técnico, desarollador web, encargado de asignar los trabajos.'
      }
    ]
  },
  {
    name: 'Functional Manager',
    members: [
      {
        img: '/images/foto_guadalupe.jpeg',
        name: 'Guadalupe',
        description: 'Docente, Licenciada en Historia, gestora cultural, encargada del acompañamiento pedagógico.'
      }
    ]
  },
  {
    name: 'Desarrolladores',
    members: [
      {
        img: '/images/foto_lucas.jpeg',
        name: 'Lucas ',
        description: 'Estudiante técnico, encargado de adaptar el diseño y desarrollar el frontend.'
      },
      {
        img: '/images/foto_ramiro.png',
        name: 'Ramiro',
        description: 'Estudiante técnico, encargado del backend y desarrollo del mapa interactivo.'
      },
      {
        img: '/images/foto_gino.png',
        name: 'Gino',
        description: 'Estudiante técnico, encargado del backend y desarrollo del mapa interactivo.'
      }
    ]
  },
  {
    name: 'Colaboradores',
    members: [
      {
        img: '/images/foto_mateo.jpg',
        name: 'Mateo',
        description: 'Estudiante técnico, colaboró en la organización del proyecto.'
      },
      {
        img: '/images/foto_gabriel.jfif',
        name: 'Gabriel',
        description: 'Estudiante técnico y programador, colaboró en el diseño.'
      },
      {
        img: '/images/foto_teo.jfif',
        name: 'Teo',
        description: 'Estudiante técnico y programador, colaboró en el diseño.'
      },
      {
        img: '/images/foto_alejo.jfif',
        name: 'Alejo',
        description: 'Estudiante técnico y programador, colaboró en la organización del desarollo.'
      },
      {
        img: null,
        name: 'Nicolás Pérez',
        description: 'Técnico, desarollador web, programador, colaboró siendo mentor de ideas.'
      },
      {
        img: null,
        name: 'Mateo Ricci',
        description: 'Técnico, desarollador web, analista funcional, colaboró enseñando a subir una página web y ubicarla en la red.'
      }
    ]
  }
]

export default function Page (): JSX.Element {
  console.log(team)
  return (
    <>
      <Head>
        <title>Nosotros</title>
      </Head>
      <Layout color='pink'>
        <section className='text-center'>
          <Title>Nosotros</Title>
        </section>
        <section className='mx-4 my-16'>
          {team.map((team) => (
            <div key={team.name} className='my-20'>
              <h3 className='text-3xl font-bold text-center'>{team.name}</h3>
              <div className='flex flex-wrap justify-center gap-4 my-8'>
                {team.members.map((member) => (
                  <div key={member.name} className='flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg border-gray-400'>
                    <Image
                      src={member.img ?? '/images/foto_default.png'}
                      alt={`Imagen de ${member.name}`} width={50} height={50}
                      className='w-36 h-36 border-4 border-black shadow-lg shadow-zinc-400 rounded-full'
                    />
                    <div>
                      <h4 className='text-xl text-center md:text-left font-bold'>{member.name}</h4>
                      <p className='max-w-sm'>{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </Layout>
    </>
  )
}
