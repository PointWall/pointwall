import Header from './Header'
import Footer from './Footer'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
