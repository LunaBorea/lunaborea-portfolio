import React from 'react'
import Ostroheader from '../components/ostroheader'

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center">
            <Ostroheader></Ostroheader>
            <div className="flex flex-col h-9/10 w-1/2">
              <div className="title uppercase text-6xl w-full border-b-lion border-b-2 mt-8 mb-8">get in touch</div>
              <div className='flex flex-row items-center mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#C7C2D6" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
                <p className="text-2xl text-frenchgray ml-4 uppercase">+358-12-3456789</p>
              </div>
              <div className='flex flex-row items-center mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#C7C2D6" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>
                <p className="text-2xl text-frenchgray ml-4 uppercase">ostroborea@gmail.com</p>
              </div>
              <div className='flex flex-row items-center mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#C7C2D6" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg>
                <p className="text-2xl text-frenchgray ml-4 uppercase">huijaustie 123, 12345, utsjoki</p>
              </div>
            </div>
        </div>
  )
}
