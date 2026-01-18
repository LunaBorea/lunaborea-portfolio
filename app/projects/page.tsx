import React from 'react'
import Ostroheader from '../components/ostroheader'
import Project from '../components/project'
import Noise from '../components/noise'

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center">
      <Noise />
      <Ostroheader />
      <div className="flex flex-col h-9/10 w-1/2 overflow-scroll no-scrollbar pb-20">
        <div className="title uppercase text-6xl w-full border-b-lion border-b-2 mt-8 mb-8">projects</div>
        <div className="project-container flex flex-col w-full justify-between center-line-v">
          <div className="flex flex-row w-full justify-between items-center">
            <Project bgImageUrl={'/img/doofslayer.png'} title={'Doofslayer'} genre={'Platformer'} githubUrl={'https://github.com/LunaBorea/PhaserPlatformer/tree/main'} />
            <div className="w-5 h-5 bg-lion rounded-full"></div>
            <p className='text-africanviolet text-5xl font-extrabold w-70'>2024</p>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <p className='text-africanviolet text-5xl font-extrabold w-70 text-right'>2024</p>
            <div className="w-5 h-5 bg-lion rounded-full"></div>
            <Project bgImageUrl={'/img/pyrebound.png'} title={'Pyrebound'} genre={'2D Wave Shooter'} githubUrl={'https://github.com/moa-byggmastar/Phaser-Grupparbete'} />
          </div>
        </div>
      </div>
    </div>
  )
}
