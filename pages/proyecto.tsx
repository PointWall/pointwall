// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import YoutubeEmbed from '@/components/YoutubeEmbed'

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Proyecto</title>
      </Head>
      <Layout color='green'>
        <Wrapper>
          <section className='text-center'>
            <Title>Acerca del proyecto</Title>
            <div className='relative mx-auto mt-16 aspect-video min-w-[200px] max-w-screen-md md:w-3/4'>
              <YoutubeEmbed embedId='ESqBYAVbcCM' />
            </div>
          </section>
          <section>
            <div className='my-10 border-l-4 border-red-300 pl-4'>
              <h2 className='text-3xl font-bold'>Idea</h2>
              <p className='my-4'>
                La idea surge mediante un proyecto de Geografía de la ET N°35
                D.E. N°18, el cual buscaba relevar zonas mediante Google Maps, y
                poder generar un mapa que muestre las zonas relevadas.
              </p>
              <p className='my-4'>
                Uno de esos mapas relevados fue el de Murales, el cual tomó otro
                rumbo, y se transformó en PointWall.
              </p>
            </div>
            <div className='my-10 border-l-4 border-orange-300 pl-4'>
              <h2 className='text-3xl font-bold'>Planificación</h2>
              <ol className='my-4 list-decimal pl-8'>
                <li>
                  Comenzamos a idealizar las bases de PointWall, qué busca, cómo
                  realizar el proyecto y cómo ponerlo en práctica.
                </li>
                <li>
                  Luego, realizamos los primeros boocetos sobre cómo se iba a
                  ver PointWall, y el enfoque que tendría.
                </li>
                <li>
                  En base a eso, nos reunimos con los encargados del desarollo
                  informático del proyecto. Y basamos las pautas para realizar
                  la páginas.
                </li>
                <li>
                  Desde ahí comenzamos a incorporar los murales y la información
                  necesaria a PointWall.
                </li>
              </ol>
            </div>
            <div className='my-10 border-l-4 border-yellow-300 pl-4'>
              <h2 className='text-3xl font-bold'>Objetivos</h2>
              <p className='my-4'>
                El objetivo prinicipal en PointWall es hacer conocer el arte
                urbano al mundo, como lo expresan los artistas, y hacer conocer
                a los artisas involucrados en la expresión del arte.
                Incorporando el uso de la tecnología, mapas, geografía y el
                arte.
                <br />
                Una nueva forma para todos aquellos que quieran hallar de fácil
                y sencillamente los murales, grafitis, etc.
              </p>
              <h2 className='text-3xl font-bold'>Nuestros Objetivos</h2>
              <ul className='my-4 list-disc pl-8'>
                <li>Ser una galería de arte urbano digital;</li>
                <li>Hacer conocer a los artistas independientes;</li>
                <li>Mostar dónde se hallan los murales en un mapa;</li>
                <li>Buscar los murales a través de etiquetas;</li>
                <li>Fomentar el arte urbano</li>
              </ul>
            </div>
            <div className='my-10 border-l-4 border-lime-300 pl-4'>
              <h2 className='text-3xl font-bold'>Finalidad</h2>
              <p className='my-4'>
                La finalidad de PointWall es ser una galería de arte urbano que
                ayude a los artistas independientes a hacerse conocer a través
                del proyecto encabezado.
                <br />
                Encontrar una forma fácil, sencilla y ágil de los mapas, es lo
                que busca ser PointWall.
                <br />
                Ser un servicio que busca colaboradores todo el tiempo, para
                poder expandir la cantidad de murales que se encuentran en
                PointWall.
              </p>
            </div>
            <div className='relative mx-auto my-16 aspect-video min-w-[200px] max-w-screen-md md:w-3/4'>
              <YoutubeEmbed embedId='AV4P9MBkaY8' />
            </div>
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}
