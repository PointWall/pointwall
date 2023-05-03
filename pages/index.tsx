// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home (): JSX.Element {
  return (
    <>
      <div className='selection:bg-black selection:text-white'>
        <Header />
        <main className=''>
          <p>Main</p>
        </main>
        <Footer />
      </div>
    </>
  )
}
