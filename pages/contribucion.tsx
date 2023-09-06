import { PointwallSession } from '@/types/pointwallSession'
import { useSession } from 'next-auth/react'
import { useState, FormEvent, ChangeEvent } from 'react'
// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
// import NotLogged from '@/components/NotLogged'

type inputValue = 'title' | 'description' | 'location' | 'tags'

interface InputOp {
  value: inputValue
  text: string
  helpText?: string
  placeholder: string
}

const FORM_INITIAL_STATE = {
  title: '',
  description: '',
  artType: '',
  location: '',
  getInContact: false,
  authorId: -1,
  images: new Array<String>(),
  tags: ''
}

<<<<<<< HEAD
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

const ART_TYPE_OPTIONS = [
  {
    value: 'Mural',
    id: 'mural',
    labelText: 'Mural'
  },
  {
    value: 'Graffiti',
    id: 'graffiti',
    labelText: 'Graffiti'
  }
]

=======
>>>>>>> cce86a3835abf4fc5a39659e1911f5d91fd543ec
const TEXT_INPUTS: InputOp[] = [
  {
    value: 'location',
    text: '¿Dónde queda?',
    helpText: 'Agregá la información más precisa que tengas de la ubicación. Puede ser dirección, calle que corta, o hasta longitud y latitud. También podés agregar un link de google maps referenciando la ubicación.',
    placeholder: '12.123123, 11.15123'
  },
  {
    value: 'title',
    text: '¿Qué nombre le pondrías a la ubicación?',
    helpText: 'Cuanto más claro sea más posibilidades existen de que la colaboración sea publicada',
    placeholder: 'Mural Benito'
  },
  {
    value: 'description',
    text: '¿Querés agregarle algún comentario/descripción? ',
    placeholder: 'Obra renovada, de gran importancia barrial...'
  },
  {
    value: 'tags',
    text: '¿Le agregarías alguna etiqueta descriptiva?',
    helpText: 'Las etiquetas pueden estar relacionadas a: contenido, lugar, estilo, etc...',
    placeholder: 'Fútbol, Arte moderno, Homenaje...'
  }
]

interface InputSectionProps {
  children: JSX.Element | JSX.Element[]
  title: string
  helpText?: string
}

async function saveImages (fileInput: FileList | undefined): Promise<any[]> {
  if (fileInput == null) return []

  const savedImages: String[] = []
  const files = Array.from(fileInput)

  const formData = new FormData()
  formData.append('upload_preset', 'pointwall')
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ?? '')

  for (const file of files) {
    formData.append('file', file)
    try {
      const data = await fetch(
        'https://api.cloudinary.com/v1_1/dsxmh7gww/image/upload',
        {
          method: 'POST',
          body: formData
        }
      )
      savedImages.push((await data.json()).url)
    } catch (error) {
      console.error(error)
    }
  }

  return savedImages
}

function InputSection ({ children, title, helpText }: InputSectionProps): JSX.Element {
  return (
    <div className='border-b-2 border-slate-700 pb-4 last:border-b-0 md:border-b-0 md:border-l-4 md:pb-0 md:pl-4'>
      <h3 className='mb-2 text-xl'>
        {title}
        {
        helpText !== undefined &&
          <span className='relative ml-2 text-gray-400 rounded-full border w-5 h-5 inline-flex items-center justify-center hover:bg-gray-100 group'>
            <FontAwesomeIcon icon={faQuestion} className='block text-xs' />
            <span className='absolute w-56 left-full ml-2 hidden group-hover:block text-xs bg-white border text-gray-800 rounded p-2 shadow-lg animate-[slideRight_0.3s_ease] z-10'>{helpText}</span>
          </span>
        }
      </h3>
      {children}
    </div>
  )
}

export default function Page (): JSX.Element {
  const { data: session } = useSession()
  const pointwallSession = session as PointwallSession
  const [images, setImages] = useState<FileList>()
  const [formData, setFormData] = useState(FORM_INITIAL_STATE)
  // Input de tipo de arte
  const [isOtherChecked, setIsOtherChecked] = useState(false)

<<<<<<< HEAD
  async function postContribution (): Promise<void> {
    if (pointwallSession?.user == null) {
      alert('Debes iniciar sesión para poder enviar el formulario')
      return
    }
    formData.author = { id: pointwallSession?.user?.id }
    formData.images = await saveImages(images)
    formData.authorId = pointwallSession?.user?.id
=======
  async function postContribution (data: any): Promise<void> {
    console.log(data)
>>>>>>> cce86a3835abf4fc5a39659e1911f5d91fd543ec

    // if (pointwallSession?.user == null) {
    //   alert('Debes iniciar sesión para poder enviar el formulario')
    //   return
    // }
    // formData.author = { id: pointwallSession?.user?.id }
    // formData.images = await saveImages(images)

    // await fetch('/api/post', {
    //   method: 'POST',
    //   body: JSON.stringify({ ...formData }),
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // }).catch((e) => console.log(e))
  }

  function handleSubmit (ev: FormEvent): void {
    ev.preventDefault()
    // @ts-expect-error
    const formD = Object.fromEntries(new FormData(ev.target))
    postContribution(formD).then(_ => setFormData(FORM_INITIAL_STATE)).catch((error) => console.error(error))
  }

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
          {/* {pointwallSession?.user != null
            ?  */}
          <Wrapper>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-6'>
                <InputSection title='¿Qué tipo de manifestación artística querés que relevemos para nuestra página?'>
                  <div className='ml-2'>
                    <div className='flex gap-2'>
                      <input
                        id='mural'
                        type='radio'
                        name='artType'
                        value='Mural'
                        // onChange={function (
                        //   ev: ChangeEvent & { target: HTMLInputElement }
                        // ) {
                        //   setFormData((prevData) => ({
                        //     ...prevData,
                        //     artType: ev.target.value
                        //   }))
                        // }}
                        // checked={formData.artType === 'Mural'}
                      />
                      <label htmlFor='mural'>Mural</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        id='graffiti'
                        type='radio'
                        name='artType'
                        value='Graffiti'
                        // onChange={function (
                        //   ev: ChangeEvent & { target: HTMLInputElement }
                        // ) {
                        //   setFormData((prevData) => ({
                        //     ...prevData,
                        //     artType: ev.target.value
                        //   }))
                        // }}
                        checked={formData.artType === 'Graffiti'}
                      />
                      <label htmlFor='graffiti'>Graffiti</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        id='other'
                        type='radio'
                        name='artType'
                        value='Otro'
                        // onChange={function (
                        //   ev: ChangeEvent & { target: HTMLInputElement }
                        // ) {
                        //   setFormData((prevData) => ({
                        //     ...prevData,
                        //     artType: ''
                        //   }))
                        // }}
                        checked={!['Graffiti', 'Mural'].includes(formData.artType)}
                      />
                      <label htmlFor='other'>Otro: </label>
                      <input
                        type='text'
                        name='otherArtType'
                        // onChange={function (
                        //   ev: ChangeEvent & { target: HTMLInputElement }
                        // ) {
                        //   setFormData((prevData) => {
                        //     return {
                        //       ...prevData,
                        //       artType: ev.target.value
                        //     }
                        //   })
                        // }}
                        value={!['Graffiti', 'Mural'].includes(formData.artType) ? formData.artType : ''}
                        className='w-full max-w-xs border-b-2 bg-slate-50 px-[.5em] outline-none focus:border-slate-400 focus:bg-slate-100'
                      />
                    </div>
                  </div>
                </InputSection>
                {TEXT_INPUTS.map((input) => (
                  <InputSection key={input.value} title={input.text} helpText={input.helpText}>
                    <input
                      type='text'
                      name={input.value}
                      className='w-full max-w-lg border-b-2 bg-slate-50 px-[.5em] py-[.25em] outline-none focus:border-slate-400 focus:bg-slate-100'
                      placeholder={`ej: ${input.placeholder}`}
                    />
                  </InputSection>
                ))}
                <InputSection title='¿Tenés fotos que querés que incluyamos en la página?'>
                  <input
                    type='file'
                    className='my-2 w-full'
                    multiple
                    accept='image/*'
                  />
                </InputSection>
                <InputSection title='¿Te interesaría que el equipo de PointWall guarde tu mail para ponerse en contacto con vos?'>
                  <div className='my-2 ml-4 flex gap-1 align-middle'>
                    <input
                      id='contactCheckbox'
                      type='checkbox'
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
          {/* : <NotLogged />} */}
        </section>
      </Layout>
    </>
  )
}
