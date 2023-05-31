import Header from './Header'
import Footer from './Footer'
// types
import { Color } from '@/lib/types'

interface Props {
  children: JSX.Element | JSX.Element[]
  color?: Color
}

export default function Layout ({ children, color }: Props): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer color={color} />
    </>
  )
}
