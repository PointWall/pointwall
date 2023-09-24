import { FormEvent, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
// components
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'

export default function Page (): JSX.Element {
  const { ref, inView } = useInView({ triggerOnce: true })
  // const [posts, setPosts] = useState([])
  const [inputState, setInputState] = useState('')

  function handleFormSubmit (ev: FormEvent): void {
    ev.preventDefault()
  }
  // const [tagsSearched, setTagsSearched] = useState(['futbol', 'asdas'])
  // const [fetchedPost, setFetchedPost] = useState([])

  useEffect(() => {
    console.log('Fetch posts')
    // async function fetchPost (): Promise<any> {
    //   const res = await fetch('https://pointwall-api.vercel.app/api/posts')
    //   console.log(await res.json())
    // }
    // fetchPost().catch(console.log)
  }, [])

  return (
    <>
      <Head>
        <title>Buscador</title>
      </Head>
      <Layout color='orange'>
        <Wrapper>
          <section
            className={`text-center ${inView ? 'animate-fade-down' : ''}`}
            ref={ref}
          >
            <Title>¡Encontrá!</Title>
            <p className='mx-auto my-[1.25em] max-w-prose md:text-2xl'>
              ¡Buscá el arte de tus artistas o temas favoritos! Podés buscarlo
              con etiquetas o por lugar. Si sos un artista que busca pubicar su
              arte, te invitamos a que a que lo hagas a través del{' '}
              <Link
                href='/contribucion'
                className='text-red-300 hover:underline'
              >
                formulario de contriubción
              </Link>
              .
            </p>
          </section>
          <section>
            <form
              onSubmit={handleFormSubmit}
              className='css-searcher relative mx-auto my-8 flex w-fit flex-wrap justify-center overflow-hidden rounded-md border'
            >
              <input
                onChange={(e) => {
                  setInputState(e.target.value)
                }}
                value={inputState}
                type='text'
                placeholder='Buscar...'
                className='bg-slate-50 p-2 outline-none md:text-xl'
              />
              <button
                type='submit'
                className='bg-slate-200 px-[1em] py-[.5em] hover:brightness-95 active:brightness-90 md:text-xl'
              >
                Buscar
              </button>
              <span className='css-searcher-separator hidden md:block' />
            </form>
          </section>
          <section className='my-16 text-center'>
            <h2 className='my-4 text-xl font-semibold md:text-4xl'>
              Resultados{' '}
              {/* <span className='text-xs text-gray-500 md:text-sm'>(Futbol)</span> */}
            </h2>
            <div className='flex flex-wrap justify-center gap-4' />
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}
