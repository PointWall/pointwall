import '@/styles/globals.css'
import type { AppProps } from 'next/app' // eslint-disable-line
import { Montserrat } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  preload: true
})

const SELECTION_COLORS = [
  'selection:bg-logoRed',
  'selection:bg-logoYellow',
  'selection:bg-logoGreen',
  'selection:bg-logoBlue',
  'selection:bg-logoPink',
  'selection:bg-logoOrange'
]

export default function App ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <div className={`${montserrat.variable} font-sans ${SELECTION_COLORS[Math.floor(Math.random() * SELECTION_COLORS.length)]} selection:text-black`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
