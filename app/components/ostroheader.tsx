import React from 'react'

export default function Ostroheader() {
  return (
    <div className="header-container flex flex-row justify-between items-center h-1/10 w-24/25">
      <div className='flex flex-row gap-4 items-center'>
        <div className="logo w-15 h-15 rounded-full bg-amber-200"></div>
        <div className="title uppercase text-amber-200 font-extrabold text-3xl h-full">Ostroborea</div>
      </div>
        <div className="mode-toggle uppercase text-amber-200 font-extrabold text-5xl cursor-pointer">X</div>
    </div>
  )
}
