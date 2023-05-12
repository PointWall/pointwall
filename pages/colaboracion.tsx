import Layout from '@/components/Layout'
import { useState, FormEvent, ChangeEvent } from 'react'

const FORM_INITIAL_STATE = {
  email: '',
  userType: '',
  artType: '',
  location: '',
  images: [],
  getInContact: false
}

export default function Page (): JSX.Element {
  /*
  ARREGLAR PROBLEMA CON EL artType TEXT INPUT AL SELECCIONAR UNA OPCION PERO ESCRIBIR EN EL INPUT
  */
  const [formData, setFormData] = useState(FORM_INITIAL_STATE)

  function handleSubmit (ev: FormEvent): void {
    ev.preventDefault()
    console.log(formData)
    setFormData(FORM_INITIAL_STATE)
  }

  // function handleInputChange (ev: ChangeEvent & { target: HTMLInputElement }): void {

  // }

  return (
    <Layout>
      <section className='text-center'>
        <h1 className='text-8xl mt-16'>Formulario colaborativo</h1>
      </section>
      <section className='px-[15%] my-16 mb-8 accent-slate-700'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='pl-4 border-l-4 border-slate-700'>
            <p className='text-xl'>Correo</p>
            <input
              type='text' onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                setFormData((prevData) => ({
                  ...prevData,
                  email: ev.target.value
                }))
              }}
              className='min-w-[220px] w-1/3 px-[.5em] py-[.25em] bg-slate-50 border-b-2 outline-none focus:bg-slate-100 focus:border-slate-400'
            />
          </div>
          <div className='pl-4 border-l-4 border-slate-700'>
            <p className='text-xl'>¿Qué tipo de usuario sos?</p>
            <div className='ml-4 my-2'>
              <div className='flex gap-2'>
                <input
                  id='productor' type='radio' name='userType' value='Productor' onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                    setFormData((prevData) => ({
                      ...prevData,
                      userType: ev.target.value
                    }))
                  }}
                />
                <label htmlFor='productor'>Productor</label>
              </div>
              <div className='flex gap-2'>
                <input
                  id='culturalCenter' type='radio' name='userType' value='Centro cultural' onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                    setFormData((prevData) => ({
                      ...prevData,
                      userType: ev.target.value
                    }))
                  }}
                />
                <label htmlFor='culturalCenter'>Centro cultural</label>
              </div>
              <div className='flex gap-2'>
                <input
                  id='neighbour' type='radio' name='userType' value='Vecino' onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                    setFormData((prevData) => ({
                      ...prevData,
                      userType: ev.target.value
                    }))
                  }}
                />
                <label htmlFor='neighbour'>Vecino/a o miembro de la comunidad</label>
              </div>
            </div>
          </div>
          <div className='pl-4 border-l-4 border-slate-700'>
            <p className='text-xl'>¿Qué tipo de manifestación artística querés que relevemos para nuestra página?</p>
            <div className='ml-4 my-2 accent-slate-700'>
              <div className='flex gap-2'>
                <input
                  id='mural' type='radio' name='artType' value='Mural' onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
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
                  id='graffiti' type='radio' name='artType' value='Graffiti' onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
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
                  type='text' name='otherArtType' onChange={function (ev: ChangeEvent & { target: HTMLInputElement }) {
                    setFormData((prevData) => ({
                      ...prevData,
                      artType: ev.target.value
                    }))
                  }}
                  className='border-b-2 px-[.5em] bg-slate-50 outline-none focus:bg-slate-100 focus:border-slate-400'
                />
              </div>
            </div>
          </div>
          <div className='pl-4 border-l-4 border-slate-700'>
            <p className='text-xl'>¿Dónde queda? Link a ubicación en Google Maps</p>
            <input type='text' className='w-1/3 min-w-[220px] px-[.5em] py-[.25em] bg-slate-50 border-b-2 outline-none focus:bg-slate-100 focus:border-slate-400' />
          </div>
          <div className='pl-4 border-l-4 border-slate-700'>
            <p className='text-xl'>¿Tenés fotos que querés que incluyamos en la página?</p>
            <input type='file' className='my-2' />
          </div>
          <div className='pl-4 border-l-4 border-slate-700'>
            <p className='text-xl'>¿Te interesaría que el equipo de PointWall guarde tu mail para ponerse en contacto con vos?</p>
            <div className='flex align-middle gap-1 ml-4 my-2'>
              <input id='contactCheckbox' type='checkbox' />
              <label htmlFor='contactCheckbox'>Sí, me interesa que se pongan en contacto conmigo</label>
            </div>
          </div>
          <button type='submit' className='text-white bg-slate-700 w-fit px-[1em] py-[.5em] my-4 border rounded-md hover:brightness-90 active:brightness-75'>Enviar</button>
        </form>
      </section>
    </Layout>
  )
}
