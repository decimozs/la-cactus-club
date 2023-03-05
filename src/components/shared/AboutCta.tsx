import Link from 'next/link'
import React from 'react'

export default function AboutCta() {
  return (
    <div className='mt-[5rem] w-full border-t-[1px] border-black'>
        <div className='p-[2rem] md:p-[5rem]'>
        <div className='text-left flex flex-col gap-6'>
            <div>
            <h1 className='font-bold text-green-500 text-[1rem] mb-[0.5rem]'>La Cactus Club</h1>
            <h1 className='font-bold text-[2rem]'>A step towards less pollution.</h1>
            <p className='mt-[1rem]'>Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
            </div>
            <Link href='/' className='font-bold text-[1rem] max-w-[100px]'>contact@cactusclub.ph</Link>
        </div>

        <div className='mt-[2rem] flex flex-col gap-10 w-full items-start justify-end md:flex-row'>
          <div className=''>
            <h1 className='mb-[5px] font-bold'>Address</h1>
            <p className='w-full max-w-[150px]'>Based in Manila, Philippines</p>
            <p></p>
          </div>
          <div className=''>
            <h1 className='mb-[5px] font-bold'>Follow Us</h1>
            <div className='flex flex-col gap-[4px]'>
              <Link href='/'>Facebook</Link>
              <Link href='/'>Instagram</Link>
              <Link href='/'>Twitter</Link>
            </div>
          </div>
          <div>
          </div>
          <div>
            <h1 className='font-bold mb-[5px]'>Developer</h1>
            <div className='flex flex-col gap-[4px]'>
              <Link href='/'>Facebook</Link>
              <Link href='/'>Instagram</Link>
              <Link href='/'>Twitter</Link>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
