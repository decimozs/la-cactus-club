import React from 'react'
import Image from 'next/image'
import { herbs, climbers, shrubs, trees, creeper } from '../../../public/images'
import Link from 'next/link'

export default function DiscoverGreenery() {
  return (
    <div>
        <h1 className='m-[2rem] font-bold text-[2rem] text-green-500'>Discover Greenery</h1>
        <div className='flex flex-wrap gap-6 items-center w-full justify-center max-w-[1200px]'>
          <div className='w-full max-w-[350px] border-black border-[1px]'>
            <Image src={herbs} alt='plant'></Image>
            <div className='border-black border-t-[1px] p-[1rem]'>
              <h1 className='font-bold text-left pl-[0.6rem] xl:pl-[2rem]'>Herbs</h1>
            </div>
            <div className='border-black border-t-[1px] flex flex-row justify-evenly items-center'>
              <h1 className='font-bold'>Discover More Herbs!</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold text-[1rem]'>→</Link>
            </div>
          </div>
          <div className='w-full max-w-[350px] h-full border-black border-[1px]'>
            <Image src={shrubs} alt='plant'></Image>
            <div className='border-black border-t-[1px] p-[1rem]'>
              <h1 className='font-bold text-left pl-[0.6rem] xl:pl-[2rem]'>Shrubs</h1>
            </div>
            <div className='border-black border-t-[1px] flex flex-row justify-evenly items-center'>
              <h1 className='font-bold'>Discover More Shrubs!</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold text-[1rem]'>→</Link>
            </div>
          </div>
          <div className='w-full max-w-[350px] border-black border-[1px]'>
            <Image src={climbers} alt='plant'></Image>
            <div className='border-black border-t-[1px] p-[1rem]'>
              <h1 className='font-bold text-left pl-[0.3rem] xl:pl-[1.7rem]'>Climbers</h1>
            </div>
            <div className='border-black border-t-[1px] flex flex-row justify-evenly items-center'>
              <h1 className='font-bold'>Discover More Climbers!</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold text-[1rem]'>→</Link>
            </div>
          </div>
          <div className='w-full max-w-[350px] border-black border-[1px]'>
            <Image src={trees} alt='plant'></Image>
            <div className='border-black border-t-[1px] p-[1rem]'>
              <h1 className='font-bold text-left pl-[0.6rem] xl:pl-[2rem]'>Trees</h1>
            </div>
            <div className='border-black border-t-[1px] flex flex-row justify-evenly items-center'>
              <h1 className='font-bold'>Discover More Trees!</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold text-[1rem]'>→</Link>
            </div>
          </div>
          <div className='w-full max-w-[350px] border-black border-[1px]'>
            <Image src={creeper} alt='plant'></Image>
            <div className='border-black border-t-[1px] p-[1rem]'>
              <h1 className='font-bold text-left pl-[0.4rem] xl:pl-[1.8rem]'>Creeper</h1>
            </div>
            <div className='border-black border-t-[1px] flex flex-row justify-evenly items-center'>
              <h1 className='font-bold'>Discover More Creeper!</h1>
              <span className='h-[3rem] w-[1px] bg-black'></span>
              <Link href='/shop' className='font-bold text-[1rem]'>→</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
