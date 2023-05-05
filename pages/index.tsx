// import Image from 'next/image'
import Layout from '@/components/Layout'
import React from 'react'

export default function Home (): JSX.Element {
  return (
    <Layout>
      <section className='text-center'>
        <h1 className='text-8xl mt-16'>¿Qué es PointWall?</h1>
        <p className='text-2xl max-w-prose mx-auto my-[1.25em]'>
          PointWall es una galería colaborativa digital de arte urbano. Liga la ubicación con la obra, permite ver los cambios con el paso del tiempo y los artistas que intervinieron. Cualquier persona desde cualquier parte del mundo puede subir sus fotos...
        </p>
        <p className='text-4xl'>¿Estás listo para colaborar con un <span>mural</span><span>graffiti</span> de tu barrio?</p>
      </section>
      <section>
        <div className='text-center my-8'>
          MAPA
        </div>
      </section>
      <section className='text-center my-16'>
        <h2 className='text-4xl font-semibold'>Formulario colaborativo</h2>
        <p className='text-2xl my-4'>Formulario para subir un mural o graffiti.</p>
        <button className='form-link text-2xl relative border-2 border-blue-200 px-[2em] py-[.5em] text-blue-200 after:bg-blue-200'>Formulario</button>
      </section>
    </Layout>
  )
}
