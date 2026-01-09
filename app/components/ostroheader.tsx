import Link from 'next/link'
import React from 'react'

export default function Ostroheader() {
  return (
    <div className="header-container flex flex-row justify-between items-center h-1/10 w-24/25">
      <div className='flex flex-row gap-4 items-center'>
        <Link className="logo w-11 h-11 mt-1 rounded-full bg-lion" href={'./'}></Link>
        <Link className="uppercase text-lion font-bold text-4xl text-shadow-ostroborea" href={'./'}>Ostroborea</Link>
      </div>
        <Link href={'/contact'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#BF9553" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>
        </Link>
    </div>
  )
}
