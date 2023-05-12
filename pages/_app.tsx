import '@/styles/globals.css'
import type { AppProps } from 'next/app' // eslint-disable-line
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={`${montserrat.variable} font-sans selection:bg-black selection:text-white`}>
      <Component {...pageProps} />
    </div>
  )
}
