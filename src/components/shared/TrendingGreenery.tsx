import React, {Fragment} from 'react'
import Image from 'next/image'
import { p1, p2, p3, p4 } from '../../../public/images'
import Link from 'next/link'

export default function TrendingGreenery() {
  return (
    <Fragment>
        <h1 className='m-[2rem] font-bold text-[2rem] text-green-500'>Trending Greenery</h1>
        <div className='flex flex-wrap items-center gap-6 justify-evenly w-full xl:gap-2'>
        <div className='border-black border-[1px] w-full max-w-[350px] xl:max-w-[410px]'>
            <Image src={p1} alt='plant'></Image>
            <div className='border-black border-t-[1px] text-left flex flex-row justify-evenly w-full items-center'>
              <h1 className='font-bold  p-[1rem]'>Plant 1</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold'>View</Link>
            </div>
        </div>
        <div className='border-black border-[1px] w-full max-w-[350px] xl:max-w-[410px]'>
            <Image src={p4} alt='plant'></Image>
            <div className='border-black border-t-[1px] text-left flex flex-row justify-evenly w-full items-center'>
              <h1 className='font-bold  p-[1rem]'>Plant 2</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold'>View</Link>
            </div>
        </div>
        <div className='border-black border-[1px] w-full max-w-[350px] xl:max-w-[410px]'>
            <Image src={p3} alt='plant'></Image>
            <div className='border-black border-t-[1px] text-left flex flex-row justify-evenly w-full items-center'>
              <h1 className='font-bold  p-[1rem]'>Plant 3</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold'>View</Link>
            </div>
        </div>
    </div>
    </Fragment>
  )
}
