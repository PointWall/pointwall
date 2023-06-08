// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import Link from 'next/link'
import React from 'react'
// import Map from '../components/Map'
import Image from 'next/image'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>PointWall</title>
      </Head>
      <Layout color='red'>
        <section className='text-center'>
          <Wrapper>
            <Title>¿Qué es PointWall?</Title>
            <p className='mx-auto my-[1.25em] max-w-prose md:text-2xl'>
              PointWall es una galería colaborativa digital de arte urbano. Liga
              la ubicación con la obra, permite ver los cambios con el paso del
              tiempo y los artistas que intervinieron. Cualquier persona desde
              cualquier parte del mundo puede subir sus fotos...
            </p>
            <p className='mb-8 text-xl md:text-4xl'>
              ¿Estás listo para colaborar con
              un <span className='border-b-4 border-logoPink'>mural</span> o <span className='border-b-4 border-logoBlue'>graffiti</span> de tu barrio?
            </p>
          </Wrapper>
        </section>
        <section className='group w-full overflow-hidden shadow-lg shadow-zinc-200'>
          <Link href='/mapa' className='relative my-8 text-center'>
            <span className='absolute left-1/2 top-1/2 z-[10] hidden -translate-x-1/2 -translate-y-1/2 text-2xl text-white transition group-hover:block'>
              Ir al mapa
            </span>
            <span className='relative w-full h-60 block transition group-hover:brightness-50'>
              <Image src='/images/screenshot-mapa-2.png' alt='screenshot mapa' fill className='object-cover' />
              {/* <Map /> */}
            </span>
          </Link>
        </section>
        <section className='my-16 text-center'>
          <h2 className='text-xl font-semibold md:text-4xl'>
            Formulario colaborativo
          </h2>
          <p className='my-4 md:text-2xl'>
            Formulario para subir un mural o graffiti.
          </p>
          <Link
            href='/contribucion'
            className='css-form-link relative my-4 inline-block border-2 border-blue-200 px-[2em] py-[.5em] text-blue-200 after:bg-blue-200 md:text-2xl'
          >
            Formulario
          </Link>
        </section>
      </Layout>
    </>
  )
}
