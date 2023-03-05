import React, { ReactNode, Fragment } from 'react'
import { Archivo } from 'next/font/google'
import Navigations from '../shared/Navigations'
import Footer from '../shared/Footer'
import AboutCta from '../shared/AboutCta'
import Title from '../shared/Title'

const font = Archivo({
    subsets : ['latin']
})

export default function Layout({
    children
} : {
    children : ReactNode
}) {
  return (
    <Fragment>
      <Title />
      <main id={font.className} className='antialiased h-full w-full max-w-[1926px] tracking-[-1px] leading-none m-auto'>
        <Navigations />
          {children}
        <AboutCta />
        <Footer />
      </main>
    </Fragment>
  )
}

