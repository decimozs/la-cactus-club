import React from 'react'
import Section from '../global/Section'
import CTABtn from '../shared/CTABtn'
import TrendingGreenery from '../shared/TrendingGreenery'
import DiscoverGreenery from '../shared/DiscoverGreenery'
import Header from '../shared/Header'

export default function Home() {
  return (
    <Section>
        <div className=''>
          <div className='flex flex-col items-center gap-6 text-center'>
            <Header />
            <CTABtn />
            <TrendingGreenery/>
            <DiscoverGreenery />
          </div>
        </div>
    </Section>
  )
}
