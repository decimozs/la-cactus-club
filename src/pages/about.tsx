import React from 'react'
import Section from '@/components/global/Section'

export default function about() {
  return (
    <Section>
      <div className='flex items-center flex-col justify-center'>
      <h1 className='font-bold text-center text-green-500 text-[3rem] xl:text-[4rem]'>La Cactus Club</h1>
      <p className='text-center mt-[2rem] w-full max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor nisl lacus, in hendrerit mauris sagittis sit amet. Donec blandit erat libero, eget scelerisque elit vehicula quis. Quisque congue velit ut vulputate bibendum. Sed vitae augue pretium, ornare odio nec, suscipit nisi. Suspendisse potenti. Aliquam vel luctus nulla, ut facilisis quam. Morbi quis quam in dolor aliquet iaculis ac sed massa. Donec auctor nisi quam, in volutpat massa lobortis ut.</p>
      </div>
    </Section>
  )
}
