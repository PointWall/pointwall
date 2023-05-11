import Layout from '@/components/Layout'
import Link from 'next/link'
import { FormEvent } from 'react'

export default function Page (): JSX.Element {
  function handleFormSubmit (ev: FormEvent): void {
    ev.preventDefault()
  }

  return (
    <Layout>
      <section className='text-center'>
        <h1 className='text-8xl mt-16'>Artistas</h1>
        <p className='text-2xl max-w-prose mx-auto my-[1.25em]'>
          ¡Buscá el arte de tus artistas favoritos! Podés buscarlo con etiquetas, por lugar o por autor.
          Si sos un artista que busca pubicar su arte, te invitamos a que a que lo hagas a través del <Link href='/contirbucion' className='text-red-300 hover:underline'>formulario de contriubción</Link>.
          O entra acá para más información.
        </p>
      </section>
      <section>
        <form onSubmit={handleFormSubmit} className='artist-searcher relative flex justify-center flex-wrap w-fit mx-auto my-8'>
          <input type='text' placeholder='Buscar...' className='bg-slate-50 p-2 text-xl outline-none focus:bg-slate-100' />
          <button type='submit' className='text-xl px-[1em] bg-slate-200 hover:brightness-95 active:brightness-90'>Buscar</button>
          <span className='artist-searcher-separator' />
        </form>
      </section>
    </Layout>
  )
}
