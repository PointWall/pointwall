// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import Link from 'next/link'
import React from 'react'
// import Map from '../components/Map'
import Image from 'next/image'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>PointWall - Galeria colaborativa de arte urbano</title>
      </Head>
      <Layout>
        <section className='text-center p-20 container mx-auto' style={{ background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3)),url(https://img.freepik.com/foto-gratis/colorido-collage-punk-rock_23-2150072270.jpg?w=900&t=st=1688223381~exp=1688223981~hmac=acc0d85c279084c02ed11fe836eea17de0579b1fd51ed74c4a2047be210f7368)',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat' }}>
          <Wrapper>
            <h2 className='text-start text-5xl text-white' style={{ fontFamily: 'Poppins', fontWeight: '700' }}>¿Qué es <b style={{ fontWeight: '900' }}>PointWall</b>?</h2>
            <p className='text-start text-3xl my-6 text-white' style={{ fontWeight: '700' }}>
              Es una galería colaborativa digital de arte urbano. <br />
              Enlaza la ubicación con la obra, permite ver los cambios con el paso del
              tiempo y los artistas que intervinieron. <br />
              ¡Cualquier persona desde cualquier parte del mundo puede subir sus obras de arte!
            </p>
            {/*  <p className='mb-6 my-4 text-white text-start text-xl md:text-4xl'>
              ¿Estás listo para colaborar con
              un <span className='border-b-4 border-logoPink'>mural</span> o <span className='border-b-4 border-logoBlue'>graffiti</span> de tu barrio?
            </p> */}
          </Wrapper>
        </section>
        <section className='text-center p-20 container mx-auto' style={{ background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://img.freepik.com/foto-gratis/carteles-rasgados_1194-2413.jpg?w=996&t=st=1688225213~exp=1688225813~hmac=ef5e7dd25753e86861acf599201bacaae6ea55a1fc7496b89b6b00eeb7d5d6a3)' }}>
          <Wrapper>
            <h2 className='text-start text-5xl text-white' style={{ fontFamily: 'Poppins', fontWeight: '800' }}>¡Mirá estas obras de arte!</h2>
            <br />
            <div className='grid-rows-1'>
              <div className='grid grid-cols-3 gap-6'>
              <div>
                <img src="https://i.imgur.com/qAGhLQz.jpg" className='rounded-lg' alt="" />
                <h2 className='text-start py-2' style={{fontFamily:'Poppins',fontWeight:'700',color:'white'}}>Mural Diego Armando Maradona</h2>
              </div>
              <div><img src="https://i.imgur.com/0GQh5m9.jpg" className='rounded-lg' alt="" />
                <h2 className='text-start py-2' style={{fontFamily:'Poppins',fontWeight:'700',color:'white'}}>Mural Diego Maradona Bostero</h2>
              </div>
              <div>
                <img src="https://doc-0k-2s-mymaps.googleusercontent.com/untrusted/hostedimage/o2fbn585vcrt3ao71o6a0j9c34/v8e7a8i9ff3vtujofief4s6524/1685448900000/QDlHPOJgeN00fcEJGLLobR72HNavDmdq/*/6ACtvi-EIfSt5Hx_CDNy8zL4IY9eSFVOKFL3mE2cF-4arKUw97cXNoHr5-DeMczbFhPQEfNio8Tti-VPnTqmgkny4jayRv3qoLu-FtGgn4boLahXec9mrBwJ5N32nfyM1pxoKaTkTSFexgwnbhwAneWsZDjyQSXUs3qRrFWHWf96IzPrk4lf-7kcvRkfRENdqG471mK-g?fife" className='rounded-lg' alt="" /></div>
              </div>
              <br />
              <div className='flex flex-col items-center justify-center'>
              <Link href='/mapa' className='rounded-md mx-3 w-1/3 p-3 m-auto text-white transition hover:none md:block' style={{ fontWeight: '500',backgroundColor:'#2a9d8f' }}>¡Quiero ver mas!</Link>
              </div>
              <br />
            </div>
          </Wrapper>
        </section>
        <section className='text-center p-20 container mx-auto' style={{ background: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url(https://img.freepik.com/foto-gratis/vibrante-mural-graffiti-representa-creatividad-cultura-juvenil-generada-ia_188544-31068.jpg?w=1060&t=st=1688223231~exp=1688223831~hmac=7061ad203dc8e022fe2a10fdd449ad122cfb3a1e8e83b25d6eb557a892ec2635)' }}>
          <Wrapper>
            <h2 className='text-start text-5xl text-white' style={{ fontFamily: 'Poppins', fontWeight: '800' }}>Unite a la revolución artística</h2>
            <p className='text-start text-3xl my-6 text-white' style={{ fontWeight: '700' }}>
              Cientos de personas en el mundo están haciendo arte en este momento <br /> ¡Ayudanos a darlos a conocer!
            </p>
            {/*  <p className='mb-6 my-4 text-white text-start text-xl md:text-4xl'>
              ¿Estás listo para colaborar con
              un <span className='border-b-4 border-logoPink'>mural</span> o <span className='border-b-4 border-logoBlue'>graffiti</span> de tu barrio?
            </p> */}
            <h4 className='text-center text-white text-3xl' style={{ fontFamily: 'Poppins', fontWeight: '700' }}>¿Cómo te gustaría colaborar?</h4>
            <div className='flex mx-auto justify-center my-6'>
              <Link href='/contribucion' className='rounded-md mx-3 p-3 text-white transition hover:none md:block' style={{ fontWeight: '500',backgroundColor:'#2a9d8f' }}>Quiero subir un Mural</Link>
              <Link href='/contribucion' className='rounded-md mx-3 p-3 text-white transition hover:none md:block' style={{ fontWeight: '500',backgroundColor:'#e76f51' }}>Quiero subir un Graffiti</Link>
            </div>
          </Wrapper>
        </section>
        <section className='group container mx-auto w-50 overflow-hidden shadow-lg shadow-zinc-200'>
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
        {/*  <section className='my-16 text-center'>
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
        </section> */}
      </Layout>
    </>
  )
}
