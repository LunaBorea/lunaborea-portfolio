import React from 'react'
import Ostroheader from '../components/ostroheader'
import Noise from '../components/noise'

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center">
      <Noise />
      <Ostroheader />

      <div className="flex flex-col h-8/10 w-2/3 mt-12">
        <div className="title uppercase text-6xl w-full border-b-lion border-b-2 mt-8 mb-8">get in touch</div>
        <p className='text-white'>Contact details will be added at a later date</p>
      </div>
    </div>
  )
}
