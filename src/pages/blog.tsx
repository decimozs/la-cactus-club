import React from 'react'
import Section from '@/components/global/Section'
import Image from 'next/image'
import { blog1, blog2, blog3, blog4, blog5, blog6 } from '../../public/images'
import Link from 'next/link'

export default function blog() {
  return (
    <Section>
      <div className='flex flex-col gap-6 items-center w-full '>
      <div className='border-black border-[1px] w-full max-w-[500px]'>
          <Image src={blog1} alt='blog'></Image>
          <div className='p-[1rem] font-bold'>
            <h1 className=''>Save the mother earth</h1>
          </div>
          <div className='p-[1rem] border-black border-t-[1px]'>
            <Link href='/' className='font-bold text-right'>Read More</Link>
          </div>
        </div>
        <div className='border-black border-[1px] w-full max-w-[500px]'>
          <Image src={blog2} alt='blog'></Image>
          <div className='p-[1rem] font-bold'>
            <h1 className=''>Save the mother earth</h1>
          </div>
          <div className='p-[1rem] border-black border-t-[1px]'>
            <Link href='/' className='font-bold text-right'>Read More</Link>
          </div>
        </div>
        <div className='border-black border-[1px] w-full max-w-[500px]'>
          <Image src={blog3} alt='blog'></Image>
          <div className='p-[1rem] font-bold'>
            <h1 className=''>Save the mother earth</h1>
          </div>
          <div className='p-[1rem] border-black border-t-[1px]'>
            <Link href='/' className='font-bold text-right'>Read More</Link>
          </div>
        </div>
        <div className='border-black border-[1px] w-full max-w-[500px]'>
          <Image src={blog4} alt='blog'></Image>
          <div className='p-[1rem] font-bold'>
            <h1 className=''>Save the mother earth</h1>
          </div>
          <div className='p-[1rem] border-black border-t-[1px]'>
            <Link href='/' className='font-bold text-right'>Read More</Link>
          </div>
        </div>
        <div className='border-black border-[1px] w-full max-w-[500px]'>
          <Image src={blog5} alt='blog'></Image>
          <div className='p-[1rem] font-bold'>
            <h1 className=''>Save the mother earth</h1>
          </div>
          <div className='p-[1rem] border-black border-t-[1px]'>
            <Link href='/' className='font-bold text-right'>Read More</Link>
          </div>
        </div>
        <div className='border-black border-[1px] w-full max-w-[500px]'>
          <Image src={blog4} alt='blog'></Image>
          <div className='p-[1rem] font-bold'>
            <h1 className=''>Save the mother earth</h1>
          </div>
          <div className='p-[1rem] border-black border-t-[1px]'>
            <Link href='/' className='font-bold text-right'>Read More</Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
