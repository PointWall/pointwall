import { PointwallSession } from '@/types/pointwallSession'
import { useSession } from 'next-auth/react'
import { useState, FormEvent, ChangeEvent } from 'react'
// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'

type inputValue = 'title' | 'description' | 'location' | 'tags'

interface InputOp {
  value: inputValue
  text: string
  placeholder: string
}

const FORM_INITIAL_STATE = {
  title: '',
  description: '',
  userType: '',
  artType: '',
  location: '',
  images: [],
  getInContact: false,
  author: {
    id: -1
  },
  tags: ''
}

const USER_TYPE_OPTIONS = [
  {
    value: 'Autor',
    id: 'author',
    labelText: 'Autor'
  },
  {
    value: 'Centro cultural',
    id: 'center',
    labelText: 'Centro cultural'
  },
  {
    value: 'Vecino',
    id: 'neighbour',
    labelText: 'Vecino/a o miembro de la comunidad'
  }
]

const TEXT_INPUTS: InputOp[] = [
  {
    value: 'location',
    text: '¿Dónde queda? Agregá la longitud y la latitud (Ej: 12.123123, 11.15123)',
    placeholder: '12.123123, 11.15123'
  },
  {
    value: 'title',
    text: '¿Qué nombre le pondrías a la ubicación? (¡Cuanto más claro sea más posibilidades existen de que la colaboración sea publicada!)',
    placeholder: 'Mural Benito'
  },
  {
    value: 'description',
    text: '¿Querés agregarle algun comentario/descripción? ',
    placeholder: 'Obra recientemente renovada, de gran importancia barrial, ...'
  },
  {
    value: 'tags',
    text: '¿Le agregarías alguna etiqueta descriptiva (artista, lugar, estilo, etc...)?',
    placeholder: 'fútbol, di angelo, moderno, palermo...'
  }
]

export default function Page (): JSX.Element {
  const { data: session } = useSession()
  const pointwallSession = session as PointwallSession
  /*
  ARREGLAR PROBLEMA CON EL artType TEXT INPUT AL SELECCIONAR UNA OPCION PERO ESCRIBIR EN EL INPUT
  */
  const [formData, setFormData] = useState(FORM_INITIAL_STATE)
  // const [isOtherChecked, setIsOtherChecked] = useState(false)

  async function postContribution (): Promise<void> {
    if (pointwallSession?.user == null) {
      alert('Debes iniciar sesión para poder enviar el formulario')
      return
    }
    formData.author = {
      id: pointwallSession?.user?.id
    }
    await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      body: JSON.stringify({ ...formData }),
      headers: {
        'content-type': 'application/json'
      }
    }).catch((e) => console.log(e))

    setFormData(FORM_INITIAL_STATE)
  }

  function handleSubmit (ev: FormEvent): void {
    ev.preventDefault()
    postContribution()
      .catch((error) => console.error(error))
  }

  // function handleInputChange (ev: ChangeEvent & { target: HTMLInputElement }): void {

  // }

  return (
    <>
      <Head>
        <title>Contribución</title>
      </Head>
      <Layout color='blue'>
        <section className='text-center'>
          <Title>Formulario de contribución</Title>
        </section>
        <section className='my-16 mb-8 accent-slate-700'>
          <Wrapper>
            <form onSubmit={(ev) => { handleSubmit(ev); return false }} className='flex flex-col gap-6'>
              <div className='pl-4 border-l-4 border-slate-700'>
                <p className='text-xl'>¿Qué tipo de usuario sos?</p>
                <div className='ml-4 my-2'>
                  {USER_TYPE_OPTIONS.map((userType) => (
                    <div key={userType.id} className='flex gap-2'>
                      <input
                        id={userType.id}
                        type='radio'
                        name='userType'
                        value={userType.value}
                        onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                          setFormData((prevData) => ({
                            ...prevData,
                            userType: ev.target.value
                          }))
                        }}
                      />
                      <label htmlFor={userType.id}>{userType.labelText}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='pl-4 border-l-4 border-slate-700'>
                <p className='text-xl'>¿Qué tipo de manifestación artística querés que relevemos para nuestra página?</p>
                <div className='ml-4 my-2 accent-slate-700'>
                  <div className='flex gap-2'>
                    <input
                      id='mural'
                      type='radio'
                      name='artType'
                      value='Mural'
                      onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                        setFormData((prevData) => ({
                          ...prevData,
                          artType: ev.target.value
                        }))
                      }}
                    />
                    <label htmlFor='mural'>Mural</label>
                  </div>
                  <div className='flex gap-2'>
                    <input
                      id='graffiti'
                      type='radio'
                      name='artType'
                      value='Graffiti'
                      onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                        setFormData((prevData) => ({
                          ...prevData,
                          artType: ev.target.value
                        }))
                      }}
                    />
                    <label htmlFor='graffiti'>Graffiti</label>
                  </div>
                  <div className='flex gap-2'>
                    <input id='other' type='radio' name='artType' value='Otro' />
                    <label htmlFor='other'>Otro: </label>
                    <input
                      type='text'
                      name='otherArtType'
                      onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                        setFormData((prevData) => {
                          return {
                            ...prevData,
                            artType: ev.target.value
                          }
                        })
                      }}
                      className='border-b-2 px-[.5em] bg-slate-50 outline-none focus:bg-slate-100 focus:border-slate-400'
                    />
                  </div>
                </div>
              </div>
              {TEXT_INPUTS.map((input) => (
                <div key={input.value} className='pl-4 border-l-4 border-slate-700'>
                  <p className='text-xl'>{input.text}</p>
                  <input
                    type='text'
                    className='min-w-[220px] w-1/3 px-[.5em] py-[.25em] bg-slate-50 border-b-2 outline-none focus:bg-slate-100 focus:border-slate-400'
                    onChange={function (ev) {
                      const newData = formData
                      newData[input.value] = ev.target.value
                      setFormData(newData)
                    }}
                    placeholder={`ej: ${input.placeholder}`}
                  />
                </div>
              ))}
              <div className='pl-4 border-l-4 border-slate-700'>
                <p className='text-xl'>¿Tenés fotos que querés que incluyamos en la página?</p>
                <input type='file' className='my-2' />
              </div>
              <div className='pl-4 border-l-4 border-slate-700'>
                <p className='text-xl'>¿Te interesaría que el equipo de PointWall guarde tu mail para ponerse en contacto con vos?</p>
                <div className='flex align-middle gap-1 ml-4 my-2'>
                  <input
                    id='contactCheckbox'
                    type='checkbox'
                    onChange={function (ev) {
                      setFormData((prevData) => ({
                        ...prevData,
                        getInContact: ev.target.checked
                      }))
                    }}
                  />
                  <label htmlFor='contactCheckbox'>Sí, me interesa que se pongan en contacto conmigo</label>
                </div>
              </div>
              <button
                type='submit'
                className='text-white bg-slate-700 w-fit px-[1em] py-[.5em] my-4 border rounded-md hover:brightness-90 active:brightness-75'
              >
                Enviar
              </button>
            </form>
          </Wrapper>
        </section>
      </Layout>
    </>
  )
}
