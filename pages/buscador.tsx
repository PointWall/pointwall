import Layout from '@/components/Layout'
import Link from 'next/link'
import { FormEvent, useState, useEffect } from 'react'
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
  }
  , [])
  return (
    <Layout>
      <section className='text-center'>
        <h1 className='text-8xl mt-16'>¡Encontrá!</h1>
        <p className='text-2xl max-w-prose mx-auto my-[1.25em]'>
          ¡Buscá el arte de tus artistas o temas favoritos! Podés buscarlo con etiquetas o por lugar.
          Si sos un artista que busca pubicar su arte, te invitamos a que a que lo hagas a través del <Link href='/contribucion' className='text-red-300 hover:underline'>formulario de contriubción</Link>.
        </p>
      </section>
      <section>
        <form onSubmit={handleFormSubmit} className='css-searcher relative flex justify-center flex-wrap w-fit mx-auto my-8'>
          <input onChange={e => { setInputState(e.target.value) }} value={inputState} type='text' placeholder='Buscar...' className='bg-slate-50 p-2 text-xl outline-none focus:bg-slate-100' />
          <button type='submit' className='text-xl px-[1em] bg-slate-200 hover:brightness-95 active:brightness-90'>Buscar</button>
          <span className='css-searcher-separator' />
        </form>
      </section>
      <section className='text-center my-16'>
        <h2 className='text-4xl font-semibold my-4'>Resultados <span className='text-gray-500 text-sm'>(Futbol)</span></h2>
        <div className='flex flex-wrap justify-center gap-5'>
          {data.slice(1, 5).map((post, i) => (
            <div key={i} className='h-[50vh] align-center sm:w-1/6 md:w-1/6  flex-col justify-center align-items flex m-5 gap-10'>
              <img src={post.images} alt='imagen' className='h-full  rounded-md' />
              <div className='flex flex-col gap-2 '>
                <h2 className='text-3xl '>{post.title}</h2>
                {post.tags === undefined
                  ? <p className='text-xs text-gray-700'>Sin etiqueta</p>
                  : (
                    <div className='text-center center'>
                      <p>Etiquetas: {post.tags}</p>
                    </div>
                    )}
              </div>

            </div>)
          )}
        </div>
      </section>

    </Layout>
  )
}
