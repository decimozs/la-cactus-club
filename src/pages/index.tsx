import React from 'react'
import dynamic from 'next/dynamic'

const DynamicHomeSection = dynamic(() => import('../components/home/Home'))

export default function App() {
  return <DynamicHomeSection />
}
