import React, { ReactNode } from 'react'

export default function Section({
    children
} : {
    children : ReactNode
}) {
  return (
    <section className='p-[2rem] mt-[5rem]'>
      {children}
    </section>
  )
}
