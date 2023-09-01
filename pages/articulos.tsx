import { useInView } from 'react-intersection-observer'
// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { Title } from '@/components/utils'

export default function Page (): JSX.Element {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <>
      <Head>
        <title>Artículos</title>
      </Head>
      <Layout color='yellow'>
        <div className='text-center'>
          <div ref={ref} className={`${inView ? 'animate-fade-right' : ''}`}>
            <Title>Artículos</Title>
            <p className='my-4'>Estamos trabajando en esta sección...</p>
          </div>
          <div className='relative h-40 md:h-60'>
            <Image fill src='/images/building-2.svg' sizes='(max-width: 768px) 80vw, (max-width: 1200px) 750px, 1000px' alt='Sección en progreso' />
          </div>
        </div>
      </Layout>
    </>
  )
}
