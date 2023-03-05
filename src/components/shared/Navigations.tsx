import Link from 'next/link'
import React, { Fragment } from 'react'
import { useState } from 'react'
import ResponsiveNav from './ResponsiveNav'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../../constants'
import { cart } from '../../../public/images'
import Image from 'next/image'
import { Lobster } from 'next/font/google'


export default function Navigations() {
  const [menu, setMenu] = useState(false)

  return (
    <Fragment>
      <motion.nav className='fixed top-0 left-0 bg-white p-[1rem] w-full flex flex-row items-center justify-between z-10 border-black border-b-[1px] md:px-[5rem]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <div className='font-bold text-green-600'>
            <Link href='/'>
              <h1>La Cactus Club</h1>
            </Link>
          </div>
          <span className='fixed right-[4rem] h-[3rem] w-[1px] bg-black md:hidden'></span>
          <div className='flex flex-row items-center gap-6 md:hidden'>
            <button className='flex flex-col gap-[4px] items-end'
            onClick={(() => setMenu(!menu))}
            >
              <span className='inline-block bg-black h-[1px] w-[2rem]'></span>
              <span className='inline-block bg-black h-[1px] w-[1.5rem]'></span>
              <span className='inline-block bg-black h-[1px] w-[1rem]'></span>
            </button>
          </div>

          <div className='hidden md:flex flex-row gap-[5rem] items-center'>
            <ul className='flex flex-row gap-9 font-bold'>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={`${item.link}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <button className='hidden w-[20px] md:flex'>
            <Image src={cart} alt='cart'></Image>
            </button>
          </div>
        </motion.nav>
        
      <AnimatePresence>
        {menu && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
            <ResponsiveNav />
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}
