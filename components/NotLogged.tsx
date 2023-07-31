import LoginButton from '@/components/LoginButton'
import { Wrapper } from './utils'

export default function NotLogged() {
  return (
    <Wrapper>
        <section className='flex items-center justify-center flex-col gap-5 border-logoPink border-l-8 md:w-[40%] md:mx-[30%] w-full mx-0'>
          <p>
            <span className='font-bold'>Inicia Sesion</span> para{' '}
            <span className='border-b-4 border-logoPink font-bold    '>
              Contribuir:{' '}
            </span>
          </p>
          <div className='flex items-center justify-center '>
            <LoginButton />
          </div>
        </section>
        {/*<div className=''>
             o descarga la app!
        </div> */}
    </Wrapper>
  )
}
