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
  images: new Array<String>(),
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
    placeholder: 'Obra renovada, de gran importancia barrial...'
  },
  {
    value: 'tags',
    text: '¿Le agregarías alguna etiqueta descriptiva (artista, lugar, estilo, etc...)?',
    placeholder: 'Fútbol, Arte moderno, Homenaje...'
  }
]

interface InputSectionProps {
  children: JSX.Element | JSX.Element[]
  title: string
}

async function saveImages(fileInput: FileList | undefined) {
  if (!fileInput) return []

  let savedImages: String[] = []
  let files = Array.from(fileInput)

  const formData = new FormData()
  formData.append('upload_preset', 'pointwall')
  formData.append('api_key',process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ?? '')
  
  for (const file of files) {
    formData.append('file', file)
    try {
      const data = await fetch(
        'https://api.cloudinary.com/v1_1/dsxmh7gww/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      )
      savedImages.push((await data.json()).url)
    } catch (error) {
      console.error(error)
    }
  }

  return savedImages
}

function InputSection({ children, title }: InputSectionProps): JSX.Element {
  return (
    <div className='border-b-2 border-slate-700 pb-4 last:border-b-0 md:border-b-0 md:border-l-4 md:pb-0 md:pl-4'>
      <h3 className='mb-2 text-xl'>{title}</h3>
      {children}
    </div>
  )
}

export default function Page(): JSX.Element {
  const { data: session } = useSession()
  const pointwallSession = session as PointwallSession
  const [images, setImages] = useState<FileList>()
  /*
  ARREGLAR PROBLEMA CON EL artType TEXT INPUT AL SELECCIONAR UNA OPCION PERO ESCRIBIR EN EL INPUT
  */
  const [formData, setFormData] = useState(FORM_INITIAL_STATE)
  // const [isOtherChecked, setIsOtherChecked] = useState(false)

  async function postContribution(): Promise<void> {
    if (pointwallSession?.user == null) {
     alert('Debes iniciar sesión para poder enviar el formulario')
      return 
    } 
    formData.author = { id: pointwallSession?.user?.id}
    formData.images = await saveImages(images)

    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ ...formData }),
      headers: {
        'content-type': 'application/json',
      },
    }).catch((e) => console.log(e))
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    postContribution().catch((error) => console.error(error)).then(_ => setFormData(FORM_INITIAL_STATE))
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
            <form
              onSubmit={(ev) => {
                handleSubmit(ev)
                return false
              }}
            >
              <div className='flex flex-col gap-6'>
                <InputSection title='¿Qué tipo de usuario sos?'>
                  <div className='ml-4'>
                    {USER_TYPE_OPTIONS.map((userType) => (
                      <div key={userType.id} className='flex gap-2'>
                        <input
                          id={userType.id}
                          type='radio'
                          name='userType'
                          value={userType.value}
                          onChange={function (
                            ev: ChangeEvent & { target: HTMLInputElement }
                          ) {
                            setFormData((prevData) => ({
                              ...prevData,
                              userType: ev.target.value
                            }))
                          }}
                        />
                        <label htmlFor={userType.id}>
                          {userType.labelText}
                        </label>
                      </div>
                    ))}
                  </div>
                </InputSection>
                <InputSection title='¿Qué tipo de manifestación artística querés que relevemos para nuestra página?'>
                  <div className='ml-2'>
                    <div className='flex gap-2'>
                      <input
                        id='mural'
                        type='radio'
                        name='artType'
                        value='Mural'
                        onChange={function (
                          ev: ChangeEvent & { target: HTMLInputElement }
                        ) {
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
                        onChange={function (
                          ev: ChangeEvent & { target: HTMLInputElement }
                        ) {
                          setFormData((prevData) => ({
                            ...prevData,
                            artType: ev.target.value
                          }))
                        }}
                      />
                      <label htmlFor='graffiti'>Graffiti</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        id='other'
                        type='radio'
                        name='artType'
                        value='Otro'
                      />
                      <label htmlFor='other'>Otro: </label>
                      <input
                        type='text'
                        name='otherArtType'
                        onChange={function (
                          ev: ChangeEvent & { target: HTMLInputElement }
                        ) {
                          setFormData((prevData) => {
                            return {
                              ...prevData,
                              artType: ev.target.value
                            }
                          })
                        }}
                        className='w-full max-w-xs border-b-2 bg-slate-50 px-[.5em] outline-none focus:border-slate-400 focus:bg-slate-100'
                      />
                    </div>
                  </div>
                </InputSection>
                {TEXT_INPUTS.map((input) => (
                  <InputSection key={input.value} title={input.text}>
                    <input
                      type='text'
                      className='w-full max-w-lg border-b-2 bg-slate-50 px-[.5em] py-[.25em] outline-none focus:border-slate-400 focus:bg-slate-100'
                      onChange={function (ev) {
                        const newData = formData
                        newData[input.value] = ev.target.value
                        setFormData(newData)
                      }}
                      /* value={formData[input.value]} */
                      placeholder={`ej: ${input.placeholder}`}
                    />
                  </InputSection>
                ))}
                <InputSection title='¿Tenés fotos que querés que incluyamos en la página?'>
                  <input
                    onChange={(e) =>
                      setImages(e.currentTarget.files ?? new FileList())
                    }
                    type='file'
                    className='my-2 w-full'
                    multiple
                  />
                </InputSection>
                <InputSection title='¿Te interesaría que el equipo de PointWall guarde tu mail para ponerse en contacto con vos?'>
                  <div className='my-2 ml-4 flex gap-1 align-middle'>
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
                    <label htmlFor='contactCheckbox'>
                      Sí, me interesa que se pongan en contacto conmigo
                    </label>
                  </div>
                </InputSection>
              </div>
              <button
                type='submit'
                className='my-4 w-fit rounded-md border bg-slate-700 px-[1em] py-[.5em] text-white hover:brightness-90 active:brightness-75'
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
