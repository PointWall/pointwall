import { PointwallSession } from '@/types/pointwallSession'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'

interface FormData {
  name: string
  topic: string
  message: string
}

export default function Page (): JSX.Element {
  const { data: session } = useSession()
  const pointwallSession = session as PointwallSession

  const [formData, setFormData] = useState<FormData>({
    name: '',
    topic: '',
    message: ''
  })

  function handleSubmit (ev: FormEvent): void {
    ev.preventDefault()

    if (pointwallSession === null) {
      alert('Debe iniciar sesión para poder enviar el formulario de contacto')
      return
    } else if (formData.name === '' || formData.message === '') {
      alert('Campos obligatorios icompletos')
      return
    }

    alert('Mensaje enviado exitosamente')
  }

  return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>
      <Layout>
        <Wrapper>
          <section className='text-center'>
            <Title>Contacto</Title>
          </section>
          <section className='mt-12'>
            <form
              onSubmit={handleSubmit}
              className='my-8 flex flex-col gap-4 rounded-md border border-gray-200 p-4 shadow-xl md:p-6'
            >
              <div className=' relative rounded-md border border-gray-400 focus-within:-z-20 focus-within:border-gray-800 focus-within:shadow-sm'>
                <input
                  type='text'
                  onChange={(ev) =>
                    setFormData((prev) => ({ ...prev, name: ev.target.value }))}
                  required
                  className='peer w-full rounded-md bg-transparent px-3 py-2 outline-none'
                />
                <label
                  className={`absolute left-0 -z-10 mt-2 pl-3 text-gray-600 transition-all ${
                    formData.name.length > 0
                      ? 'z-30 ml-2 mt-[2px] -translate-y-2/3 bg-white pl-[3px] pr-1 text-xs'
                      : ''
                  } peer-focus:ml-2 peer-focus:mt-0.5 peer-focus:-translate-y-2/3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs`}
                >
                  Nombre*
                </label>
              </div>
              <div className='relative rounded-md border border-gray-400 focus-within:-z-20 focus-within:border-gray-800 focus-within:shadow-sm'>
                <input
                  type='text'
                  onChange={(ev) =>
                    setFormData((prev) => ({ ...prev, topic: ev.target.value }))}
                  className='peer w-full rounded-md bg-transparent px-3 py-2 outline-none'
                />
                <label
                  className={`absolute left-0 -z-10 mt-2 pl-3 text-gray-600 transition-all ${
                    formData.topic.length > 0
                    ? 'z-30 ml-2 mt-[2px] -translate-y-2/3 bg-white pl-[3px] pr-1 text-xs'
                    : ''
                  } peer-focus:ml-2 peer-focus:mt-0.5 peer-focus:-translate-y-2/3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs`}
                >
                  Asunto
                </label>
              </div>
              <div className='relative rounded-md border border-gray-400 focus-within:-z-20 focus-within:border-gray-800 focus-within:shadow-sm'>
                <textarea
                  onChange={(ev) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: ev.target.value
                    }))}
                  required
                  className='peer max-h-96 min-h-[5.5rem] w-full rounded-md bg-transparent px-3 py-2 outline-none'
                />
                <label
                  className={`absolute left-0 -z-10 mt-2 pl-3 text-gray-600 transition-all ${
                    formData.message.length > 0
                    ? 'z-30 ml-2 mt-[2px] -translate-y-2/3 bg-white pl-[3px] pr-1 text-xs'
                    : ''
                  } peer-focus:ml-2 peer-focus:mt-0.5 peer-focus:-translate-y-2/3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs`}
                >
                  Mensaje*
                </label>
              </div>
              <button className='rounded-md bg-slate-800 px-4 py-2 text-white md:w-fit'>
                Enviar
              </button>
            </form>
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}
