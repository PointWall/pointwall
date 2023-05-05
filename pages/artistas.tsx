import Layout from '@/components/Layout'
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
          Busca el arte de tus artistas favoritos! Podes buscarlo con etiquetas, por lugar o por autor.
          Si sos un artista que busca pubicar su arte, te invitamos a que te comuniques con nosotros.
          O entra acá para más información.
        </p>
      </section>
      <section>
        <form onSubmit={handleFormSubmit} className='flex w-full justify-center gap-4 flex-wrap'>
          <input type='text' className='border-2 p-2 text-xl' />
          <button type='submit' className='text-xl border-2 hover:bg-yellow-100'>Buscar</button>
        </form>
      </section>
    </Layout>
  )
}
