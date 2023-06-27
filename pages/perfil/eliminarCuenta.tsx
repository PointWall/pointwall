import { PointwallSession } from '@/types/pointwallSession'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
// components
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'

interface FormData {
  name: string
  topic: string
  message: string
}

export default function Page(): JSX.Element {
  const [confirmState, setConfirmState] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()
  let pointwallSession = session as PointwallSession

  function deleteAccount() {
    console.log({ pointwallSession })
    fetch('/api/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: pointwallSession?.user?.id,
      }),
    }).then((_) => {
      signOut()
      setConfirmState(false)
      router.push('/')
    })
  }

  return (
    <>
      <Head>
        <title>Eliminar Cuenta</title>
      </Head>
      <Layout>
        <section className='flex h-[63.3vh] flex-col items-center  justify-center gap-5 p-10'>
          {pointwallSession?.user?.id ? (
            <>
              {confirmState ? (
                <section className='flex items-center justify-center flex-col gap-5'>
                  <p>¿Estas seguro?</p>
                  <div className='flex gap-3'>
                    <button
                      className='rounded-md bg-red-300 px-3 py-2 text-gray-900 duration-150 hover:bg-red-400'
                      onClick={deleteAccount}
                    >
                      Confirmar
                    </button>

                    <button
                      className='rounded-md bg-green-300 px-3 py-2 text-gray-900 duration-150 hover:bg-green-400'
                      onClick={(_) => setConfirmState(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </section>
              ) : (
                <button
                  className='rounded-md bg-red-300 px-3 py-2 text-gray-900 duration-150 hover:bg-red-400'
                  onClick={(_) => setConfirmState(true)}
                >
                  Eliminar Cuenta
                </button>
              )}
              <p>
                Al eliminar tu cuenta se borraran todos tus datos y no podras
                recuperarlos
              </p>
            </>
          ) : (
            <p>No estas autorizado! (Inicia Sesion)</p>
          )}
        </section>
      </Layout>
    </>
  )
}
