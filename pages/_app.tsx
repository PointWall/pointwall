import '@/styles/globals.css'
import type { AppProps } from 'next/app' // eslint-disable-line

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
