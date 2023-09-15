// import { PointwallSession } from '@/types/pointwallSession'
// import { useSession } from 'next-auth/react'
import { useState, FormEvent, ChangeEvent } from 'react'
// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { TextInput, ImageInput, TextareaInput } from '@/components/formComponents'
// import NotLogged from '@/components/NotLogged'

type inputValue = 'title' | 'description' | 'location' | 'tags'

interface InputSectionProps {
  children: JSX.Element | JSX.Element[]
  title: string
  helpText?: string
}

interface InputOp {
  value: inputValue
  text: string
  helpText?: string
  placeholder: string
}

const TEXT_INPUTS: InputOp[] = [
  {
    value: 'location',
    text: '¿Dónde queda?',
    helpText: 'Agregá la información más precisa que tengas de la ubicación. Puede ser dirección, calle que corta, o hasta longitud y latitud. También podés agregar un link de google maps referenciando la ubicación.',
    placeholder: 'Av. Lope de Vega 2700'
  },
  {
    value: 'title',
    text: '¿Qué nombre le pondrías a la ubicación?',
    helpText: 'Cuanto más claro sea más posibilidades existen de que la colaboración sea publicada',
    placeholder: 'Mural Benito'
  },
  {
    value: 'tags',
    text: '¿Le agregarías alguna etiqueta descriptiva?',
    helpText: 'Las etiquetas pueden estar relacionadas a: contenido, lugar, estilo, etc...',
    placeholder: 'Fútbol, Arte moderno, Homenaje...'
  }
]

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
  // const { data: session } = useSession()
  // const pointwallSession = session as PointwallSession
  // const [images, setImages] = useState<FileList>()

  // const [formData, setFormData] = useState(FORM_INITIAL_STATE)
  const [artType, setArtType] = useState('')
  const [acceptsContact, setAcceptsContact] = useState(false)

  // async function postContribution (data: any): Promise<void> {
  //   console.log(data)

  //   // if (pointwallSession?.user == null) {
  //   //   alert('Debes iniciar sesión para poder enviar el formulario')
  //   //   return
  //   // }
  //   // formData.author = { id: pointwallSession?.user?.id }
  //   // formData.images = await saveImages(images)

  //   // await fetch('/api/post', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify({ ...formData }),
  //   //   headers: {
  //   //     'content-type': 'application/json'
  //   //   }
  //   // }).catch((e) => console.log(e))
  // }

  function handleSubmit (ev: FormEvent): void {
    ev.preventDefault()
    // @ts-expect-error
    const formD = new FormData(ev.target)
    formD.append('artType', artType)
    formD.append('acceptsContact', acceptsContact.toString())
    console.log(Object.fromEntries(formD))
    // postContribution(formD).then(_ => setFormData(FORM_INITIAL_STATE)).catch((error) => console.error(error))
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
                        onChange={() => setArtType('Mural')}
                        checked={artType === 'Mural'}
                      />
                      <label htmlFor='mural'>Mural</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        id='graffiti'
                        type='radio'
                        onChange={() => setArtType('Graffiti')}
                        checked={artType === 'Graffiti'}
                      />
                      <label htmlFor='graffiti'>Graffiti</label>
                    </div>
                    <div className='flex gap-2'>
                      <input
                        id='other'
                        type='radio'
                        onChange={() => setArtType('Otro')}
                        checked={!['Graffiti', 'Mural'].includes(artType)}
                      />
                      <label htmlFor='other'>Otro: </label>
                      <input
                        type='text'
                        onChange={(ev: ChangeEvent & { target: HTMLInputElement }) => setArtType(ev.target.value)}
                        value={!['Graffiti', 'Mural'].includes(artType) ? artType : ''}
                        className='w-full max-w-xs border-b-2 bg-slate-50 px-[.5em] outline-none focus:border-slate-400 focus:bg-slate-100'
                      />
                    </div>
                  </div>
                </InputSection>
                <InputSection title='¿Querés agregarle algún comentario/descripción?'>
                  <TextareaInput name='description' placeholder='Obra de arte recientemente renovada, de gran importancia barrial...' className='w-full max-w-lg border-b-2 bg-slate-50 px-[.5em] py-[.25em] outline-none min-h-[120px] max-h-[280px] focus:border-slate-400 focus:bg-slate-100' />
                </InputSection>
                {TEXT_INPUTS.map((input) => (
                  <InputSection key={input.value} title={input.text} helpText={input.helpText}>
                    <TextInput name={input.value} placeholder={input.placeholder} className='w-full max-w-lg border-b-2 bg-slate-50 px-[.5em] py-[.25em] outline-none focus:border-slate-400 focus:bg-slate-100' />
                  </InputSection>
                ))}
                <InputSection title='¿Tenés fotos que querés que incluyamos en la página?'>
                  <ImageInput name='images' multiple className='w-fit block font-light text-sm mb-1' />
                </InputSection>
                <InputSection title='¿Te interesaría que el equipo de PointWall guarde tu mail para ponerse en contacto con vos?'>
                  <div className='my-2 ml-4 flex gap-1 align-middle'>
                    <input
                      id='contactCheckbox'
                      type='checkbox'
                      onChange={() => setAcceptsContact(prev => !prev)}
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
