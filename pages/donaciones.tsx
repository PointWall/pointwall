// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title } from '@/components/utils'

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Donaciones</title>
      </Head>
      <Layout>
        <section className='text-center'>
          <Title>Donaciones</Title>
        </section>
      </Layout>
    </>
  )
}
