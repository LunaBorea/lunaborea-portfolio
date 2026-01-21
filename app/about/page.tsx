import React from 'react'
import Ostroheader from '../components/ostroheader'
import Noise from '../components/noise'

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center">
      <Noise />
      <Ostroheader />

      <div className="flex flex-col h-8/10 w-2/3 mt-12">
        <div className="title uppercase text-6xl w-full border-b-lion border-b-2 mt-8 mb-8">about me</div>
        <p className='text-2xl text-frenchgray w-full font-sans'>Hi! My name is Nathanael Lampa, also known online as LunaBorea. I'm an aspiring game developer, artist, and writer from Finland. 
            I love space, climbing, Dune, problem-solving, and getting into the gnitty gritty details of the things I'm interested in. I'm endlessly curious and constantly trying to improve.
        </p>
        <div className="text-lion uppercase text-4xl w-full mt-8 mb-2">skills</div>

        <div className="flex flex-row gap-12">
            <div className='flex flex-col'>
                <p className='text-3xl text-frenchgray w-full font-sans mb-1'>Languages</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Javascript / Typescript</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>HTML</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>CSS / Tailwind CSS</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90 mb-2'>GDScript</p>
            </div>
            <div className="flex flex-col">
                <p className='text-3xl text-frenchgray w-full font-sans mb-1'>Engines/Frameworks</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Godot</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Phaser</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>React</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Next.js</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90 mb-2'>Node.js</p>
            </div>
            <div className="flex flex-col">
                <p className='text-3xl text-frenchgray w-full font-sans mb-1'>Tools</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Krita</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Aseprite</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Blender</p>
                <p className='text-2xl text-frenchgray w-full font-sans opacity-90'>Git & Github</p>
            </div>
        </div>

      </div>
    </div>
  )
}
