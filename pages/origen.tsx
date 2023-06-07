// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { Title } from '@/components/utils'

const EXAMPLES = [
  {
    name: 'España',
    description:
      'En la Sala de la Gran Pintura, la cual es la más espectacular en cuanto a los frescos existentes en la mansión, se encuentran pinturas son siglo I AC, que hacen referencia a la iniciación de las mujeres en el culto a Dionisio.',
    img: '/images/mural_españa.jpg'
  },
  {
    name: 'Italia',
    description:
      'Miguel Ángel decoró por completo la bóveda de este espacio, con un conjunto de frescos que representan un enorme número de escenas bíblicas y en el que se citan más de 300 personajes distintos en unos 500 metros cuadrados de pintura. El pasaje de la Creación de Adán debe ser uno de los más famosos de la Historia del Arte.',
    img: '/images/mural_italia.jpg'
  },
  {
    name: 'Estonia',
    description:
      'En Pärnu en Estonia, el cual muestra la ambición por las cosas materiales y superficiales se ha posicionado como el motor de la vida en el siglo XXI. Este mural y otros se pueden encontrar al caminar junto al río Pärnu, muy cerca del puente que va hacia la bella ciudad de Tallin, la capital de Estonia.',
    img: '/images/mural_estonia.jpg'
  }
]

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Orígen Histórico</title>
      </Head>
      <Layout color='yellow'>
        <div className='text-center'>
          <Title>Orígenes Históricos</Title>
        </div>

        <section className='align-items m-5 flex flex-col justify-center gap-2 p-3 md:flex-row'>
          {EXAMPLES.map((example) => (
            <div key={example.name} className='rounded-md border-black'>
              <div className=''>
                <h3 className='blonde text-center font-bold'>{example.name}</h3>
                <div className='align-items flex-center flex flex-col items-center justify-center gap-5 p-5 '>
                  <p>{example.description}</p>
                  <div className='relative aspect-square w-full max-w-xs'>
                    <Image
                      src={example.img ?? '/images/foto_default.png'}
                      alt={`Imagen de ${example.name}`}
                      fill
                      className='rounded-sm border-4 border-black shadow-lg shadow-zinc-400'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Layout>
    </>
  )
}
