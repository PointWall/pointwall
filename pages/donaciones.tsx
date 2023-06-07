// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import Link from 'next/link'

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Donaciones</title>
      </Head>
      <Layout>
        <Wrapper>
          <section className='text-center'>
            <Title>Donaciones</Title>
          </section>
          <section className='mt-12 md:mb-60'>
            <p>
              Si querés apoyar económicamente el proyecto, podés hacerlo
              regalándonos <Link href='https://cafecito.app/pointwall' className='text-blue-300 font-medium hover:underline'>un cafecito</Link>.
            </p>
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}
