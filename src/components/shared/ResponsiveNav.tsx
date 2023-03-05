import React from 'react'
import { navLinks } from '../../../constants'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function ResponsiveNav() {
  const [remove, removeMenu] = useState(false)

  return (
    <AnimatePresence mode='wait'>
        {!remove && (
            <motion.nav className='fixed bg-white h-full w-full top-0 left-0 flex flex-col font-thin gap-6 z-9'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <ul className='flex flex-col gap-2 mt-[5rem]'>
              {navLinks.map((item, index) => (
                <li key={index} className='text-[3rem] border-b-[1px] border-black mb-[1rem] py-[1rem]'>
                  <Link href={`${item.link}`} className='ml-[2rem]' onClick={(() =>removeMenu(!remove))}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className='mt-auto p-[2rem]'>
              <h1 className='font-bold text-green-500 mb-1'>La Cactus Club </h1>
              <h1 className='font-bold'>© 2023</h1>
            </div>
            </motion.nav>
        )}
    </AnimatePresence>
  )
}
