import '@/styles/globals.css'
import type { AppProps } from 'next/app' // eslint-disable-line
import { Montserrat } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function App ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <div className={`${montserrat.variable} font-sans selection:bg-black selection:text-white`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
