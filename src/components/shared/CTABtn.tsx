import React from 'react'
import Link from 'next/link'

export default function CTABtn() {
  return (
    <div className='flex flex-row items-center justify-center gap-3 font-bold'>
        <Link href='/about' className='border-[1px] border-black px-[1.5rem] py-[0.8rem]'>Resolution</Link>
        <Link href='/shop' className='border-[1px] border-black px-[1.5rem] py-[0.8rem] w-[124.3px]'>Shop</Link>
    </div>
  )
}
