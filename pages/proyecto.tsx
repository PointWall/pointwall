// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title } from '@/components/utils'
import YoutubeEmbed from '@/components/YoutubeEmbed'

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Proyecto</title>
      </Head>
      <Layout color='green'>
        <section className='text-center'>
          <Title>Acerca del proyecto</Title>
          <div className='max-w-screen-md min-w-[200px] w-3/4 aspect-video mx-auto mt-16 relative'>
            <YoutubeEmbed embedId='ESqBYAVbcCM' />
          </div>
        </section>
        <section className='px-[15%]'>
          <div className='border-red-300 border-l-4 pl-4 my-10'>
            <h2 className='text-3xl font-bold'>Idea</h2>
            <p className='my-4'>
              La idea surge mediante un proyecto de Geografía de la ET N°35 D.E. N°18. El cual buscaba relevar zonas mediante Google Maps, y poder generar un mapa que muestre las zonas relevadas.
            </p>
            <p className='my-4'>
              Uno de esos mapas relevados fue el de Murales, el cual tomo otro rumbo, y se transformó en PointWall
            </p>
          </div>
          <div className='border-orange-300 border-l-4 pl-4 my-10'>
            <h2 className='text-3xl font-bold'>Planificación</h2>
            <ol className='my-4 list-decimal pl-8'>
              <li>Comenzamos a idealizar las bases de PointWall, que busca, como realizar el proyecto y como ponerlo en práctica.</li>
              <li>Luego, realizamos los primeros boocetos sobre como se iba a ver PointWall, y el enfoque que tendría.</li>
              <li>En base a eso, nos reunimos con los encargados del desarollo informático del proyecto. Y basamos las pautas para realizar la páginas.</li>
              <li>Desde ahí comenzamos a incorporar los murales y la información necesaria a PointWall.</li>
            </ol>
          </div>
          <div className='border-yellow-300 border-l-4 pl-4 my-10'>
            <h2 className='text-3xl font-bold'>Objetivos</h2>
            <p className='my-4'>
              El objetivo prinicipal en PointWall es hacer conocer el arte urbano al mundo, como lo expresan los artistas, y hacer conocer a los artisas involucrados en la expresión del arte.
              Incorporando el uso de la tecnología, mapas, geografía y el arte.<br />
              Una nueva forma para que todos aquellos que quieran hallar de una forma fácil y sencilla los murales, grafitis, etc.
            </p>
            <h2 className='text-3xl font-bold'>Nuestros Objetivos</h2>
            <ul className='my-4 list-disc pl-8'>
              <li>Ser una galería de arte urbano digital;</li>
              <li>Hacer conocer a los artistas independientes;</li>
              <li>Mostar donde se hallan los murales en un mapa;</li>
              <li>Buscar los murales a través de etiquetas;</li>
              <li>Fomentar el arte urbano</li>
            </ul>
          </div>
          <div className='border-lime-300 border-l-4 pl-4 my-10'>
            <h2 className='text-3xl font-bold'>Finalidad</h2>
            <p className='my-4'>
              La finalidad de PointWall es ser una galería de arte urbano que ayude a los artistas independientes a hacerse conocer a través del proyecto encabezado.<br />
              Encontra una forma fácil, sencilla y ágil de los mapas, es lo que busca ser PointWall.<br />
              Ser un servicio que busca colaboradores todo el tiempo, para poder expandir la cantidad de murales en los que hay PointWall.
            </p>
          </div>
          <div className='max-w-screen-md min-w-[200px] w-3/4 aspect-video mx-auto my-16 relative'>
            <YoutubeEmbed embedId='AV4P9MBkaY8' />
          </div>
        </section>
      </Layout>
    </>
  )
}
