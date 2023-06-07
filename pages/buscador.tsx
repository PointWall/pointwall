import { FormEvent, useState, useEffect } from 'react'
// components
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import { data } from '@/lib/fakeData'
// import GoogleMapReact from 'google-map-react'
// import GoogleMap from 'google-maps-react-markers'
// import Marker from '@/components/map/Marker'

export default function Page (): JSX.Element {
  function handleFormSubmit (ev: FormEvent): void {
    ev.preventDefault()
  }
  // const [tagsSearched, setTagsSearched] = useState(['futbol', 'asdas'])
  // const [fetchedPost, setFetchedPost] = useState([])
  const [inputState, setInputState] = useState('')

  useEffect(() => {
    //   const fetchPost = async () => {
    //      const res = await fetch(`http://localhost:3000/api/posts/${tagsSearched.join("%")}`)
    //      console.log(await res.json())
    //    }
    //    fetchPost()
  }, [])

  return (
    <>
      <Head>
        <title>Buscador</title>
      </Head>
      <Layout color='orange'>
        <Wrapper>
          <section className='text-center'>
            <Title>¡Encontrá!</Title>
            <p className='mx-auto my-[1.25em] max-w-prose md:text-2xl'>
              ¡Buscá el arte de tus artistas o temas favoritos! Podés buscarlo
              con etiquetas o por lugar. Si sos un artista que busca pubicar su
              arte, te invitamos a que a que lo hagas a través del <Link href='/contribucion' className='text-red-300 hover:underline'>formulario de contriubción</Link>
              .
            </p>
          </section>
          <section>
            <form
              onSubmit={handleFormSubmit}
              className='css-searcher relative mx-auto my-8 flex w-fit flex-wrap justify-center'
            >
              <input
                onChange={(e) => {
                  setInputState(e.target.value)
                }}
                value={inputState}
                type='text'
                placeholder='Buscar...'
                className='bg-slate-50 p-2 outline-none focus:bg-slate-100 md:text-xl'
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
              <span className='text-xs text-gray-500 md:text-sm'>(Futbol)</span>
            </h2>
            <div className='flex flex-wrap justify-center gap-5'>
              {data.slice(1, 5).map((post, i) => (
                <div
                  key={i}
                  className='align-center align-items flex h-fit min-w-[200px] flex-col justify-center gap-4 rounded-md border shadow-xl sm:w-1/6 md:w-2/5'
                >
                  <img
                    src={post.images}
                    alt='imagen'
                    className='w-full rounded-t-md'
                  />
                  <div className='flex flex-col gap-2 px-4 pb-4'>
                    <h2 className='text-xl md:text-2xl '>{post.title}</h2>
                    {post.tags === undefined
                      ? (
                        <p className='text-xs text-gray-700'>Sin etiqueta</p>
                        )
                      : (
                        <div className='center text-center text-xs md:text-sm'>
                          <p>Etiquetas: {post.tags}</p>
                        </div>
                        )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}
