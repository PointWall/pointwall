import { useInView } from 'react-intersection-observer'
// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { Title, Wrapper } from '@/components/utils'
import { useState } from 'react'

const ARTICLES = [
  {
    title: 'Íconos del arte popular',
    description: 'En este primer artículo sobre distintos íconos y representantes del arte callejero y popular.',
    image: '/images/articles/b.webp',
    imageCover: true,
    tags: ['Arte callejero', 'Arte barrial'],
    content: '<h1>Título</h1><p>párrafo con texto de contenido</p>'
  },
  {
    title: 'La importancia del arte callejero',
    description: 'En este artículo te contamos sobre la importancia que tiene promover el arte callejero en nuestra sociedad.',
    image: '/images/articles/a.webp',
    imageCover: true,
    tags: ['Cultura'],
    content: '<h1>Título</h1><p>párrafo con texto de contenido</p>'
  },
  {
    title: 'La historia de PointWall',
    description: 'En este primer artículo te contamos en detalle como inció el proyecto, qué busca, y que se puede esperar para el futuro.',
    tags: ['Murales'],
    content: '<h1>Título</h1><p>párrafo con texto de contenido</p>'
  },
  {
    title: 'La historia de PointWall',
    description: 'En este primer artículo te contamos en detalle como inció el proyecto, qué busca, y que se puede esperar para el futuro.',
    content: '<h1>Título</h1><p>párrafo con texto de contenido</p>'
  }
]

function ArticleCard ({ article }: any): JSX.Element {
  return (
    <div className='relative w-full shadow md:max-w-lg border border-gray-50 rounded p-4 md:p-6 space-y-4'>
      <Link href='#' className='relative block border rounded overflow-hidden group bg-black bg-opacity-0 hover:bg-opacity-75 transition-all'>
        <Image src={article.image ?? '/images/PointWall.png'} alt='Pointwall' width={500} height={200} className={`aspect-video hover:brightness-[25%] transition-all ${article.imageCover === true ? 'object-cover' : 'object-contain'}`} />
        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover:block transition-all'>Leer</span>
      </Link>
      <div>
        <h3 className='text-xl font-medium'>{article.title}</h3>
        {article.tags !== undefined ? <div className='flex flex-wrap gap-1'>{article.tags.map((tag: any, i: any) => <span key={i} className='text-gray-500 text-xs border py-0.5 px-1 rounded'>{tag}</span>)}</div> : <></>}
      </div>
      <p className='text-sm'>{article.description}</p>
      {/* <button className='p-2 rounded-md bg-gray-100 hover:underline hover:bg-gray-200 active:bg-gray-300 relative bottom-0'>Leer</button> */}
    </div>
  )
}

export default function Page (): JSX.Element {
  const [prevView, setPrevView] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <>
      <Head>
        <title>Artículos</title>
      </Head>
      <Layout color='yellow'>
        <div ref={ref} className={`text-center ${inView ? 'animate-fade-right' : ''}`}>
          <Title>Artículos</Title>
        </div>
        {!prevView
          ? (
            <div className='text-center'>
              <p className='my-4'>Estamos trabajando en esta sección...</p>
              <button onClick={() => setPrevView(true)} className='rounded-md bg-gray-100 p-2 mt-4 mb-8 hover:bg-gray-200 active:bg-gray-300'>Ver adelanto</button>
              <div className='relative h-40 md:h-60'>
                <Image fill src='/images/building-2.svg' sizes='(max-width: 768px) 80vw, (max-width: 1200px) 750px, 1000px' alt='Sección en progreso' className='animate-fade-right' />
              </div>
            </div>
            )
          : (
            <Wrapper>
              <button onClick={() => setPrevView(false)} className='block w-fit mx-auto rounded-md bg-gray-100 p-2 mt-4 mb-8 hover:bg-gray-200 active:bg-gray-300'>Cerrar</button>
              <div className='flex flex-wrap justify-evenly gap-8 md:my-8 animate-fade-up'>
                {ARTICLES.map((article, i) => (
                  <ArticleCard article={article} key={i} />
                ))}
              </div>
            </Wrapper>
            )}
      </Layout>
    </>
  )
}
