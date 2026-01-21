"use client"
import React, { useState } from 'react'
import Ostroheader from '../components/ostroheader'
import Noise from '../components/noise'
import Link from 'next/link'

export default function page() {
  const [openSections, setOpenSections] = useState({
    games: false,
    art: false,
    writing: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      // @ts-ignore
      [section]: !prev[section],
    }))
  }

  return (
    <div className="h-screen flex flex-col items-center">
      <Noise />
      <Ostroheader />

      <div className="flex flex-col h-8/10 w-2/3 mt-20">
        <div className="title uppercase text-6xl w-full border-b-lion border-b-2 mb-12">
          projects
        </div>

        {/* Games */}
        <div className='mb-8 w-full'>
          <div onClick={() => toggleSection('games')} className="flex flex-row items-center mb-4 pl-2 border-b-frenchgray border-b-2 w-fit cursor-pointer group">
            <svg width="48" height="48" viewBox="0 0 512 512"><path fill="#C7C2D6" d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.1 107.1 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.7 115.7 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.6 56.6 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37M208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32m84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288m0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20m44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20"/></svg>
            <p className="text-3xl text-frenchgray ml-5 opacity-90 group-hover:opacity-100">Games</p>
          </div>

          {openSections.games && (
            <div className="mb-4 mt-8 w-full text-frenchgray flex flex-row gap-8">

              <div className='w-1/3 h-[40vh] bg-void border-4 border-lion'>
                <img src="/img/pyreboundgameplay.gif" alt="Gameplay of my project, pyrebound" className='w-full h-3/5'/>

                <div className='w-full h-2/5 p-3'>
                  <div className='flex flex-row items-center h-1/6 w-full mb-1'>
                    <h1 className='text-3xl text-africanviolet uppercase'>Pyrebound</h1>
                  </div>
                  <div className='flex flex-row items-center h-1/6 w-full gap-4'>
                    <h1 className='text-2xl text-lion opacity-80 hover:opacity-100 hover:underline underline-offset-4 transition'><Link href="/pyrebound/index.html" target='_blank'>Play</Link></h1>
                    <h1 className='text-2xl text-lion opacity-80 hover:opacity-100 hover:underline underline-offset-4 transition'><a href="https://github.com/moa-byggmastar/Phaser-Grupparbete" target='_blank'>Github</a></h1>
                  </div>

                  <p className='text-12 text-frenchgray h-4/6 w-full overflow-y-scroll'>A 2D endless wave shooter, made as a group project. My responsibilites included the game concept and core design, art assets, and gameplay scripting. Other team members contributed to gameplay scripting. The project was completed with a full gameplay loop.</p>
                </div>
              </div>

              <div className='w-1/3 h-[40vh] bg-void border-4 border-lion'>
                <img src="/img/doofslayergameplay.gif" alt="Gameplay of my project, doofslayer" className='w-full h-3/5 object-contain bg-black'/>

                <div className='w-full h-2/5 p-3'>
                  <div className='flex flex-row items-center h-1/6 w-full mb-1'>
                    <h1 className='text-3xl text-africanviolet uppercase'>Doofslayer</h1>
                  </div>
                  <div className='flex flex-row items-center h-1/6 w-full gap-4'>
                    <h1 className='text-2xl text-lion opacity-80 hover:opacity-100 hover:underline underline-offset-4 transition'><Link href="/doofslayer/index.html" target='_blank'>Play</Link></h1>
                    <h1 className='text-2xl text-lion opacity-80 hover:opacity-100 hover:underline underline-offset-4 transition'><a href="https://github.com/LunaBorea/PhaserPlatformer" target='_blank'>Github</a></h1>
                  </div>

                  <p className='text-12 text-frenchgray h-4/6 w-full overflow-y-scroll'>A 2D platformer prototype, exploring basic mechanics and visual style</p>
                </div>

              </div>
              
            </div>
          )}
        </div>

        {/* Art */}
        <div className='mb-8 w-full'>
          <div onClick={() => toggleSection('art')} className="flex flex-row items-center mb-4 pl-2 border-b-frenchgray border-b-2 w-fit cursor-pointer group">
            <svg width="48" height="48" viewBox="0 0 20 20"><path fill="#C7C2D6" d="M15.993 1.385a1.87 1.87 0 0 1 2.623 2.622l-4.03 5.27a12.75 12.75 0 0 1-4.237 3.562a4.51 4.51 0 0 0-3.188-3.188a12.75 12.75 0 0 1 3.562-4.236zM6 11a3 3 0 0 0-3 3a.5.5 0 0 1-.72.45a.75.75 0 0 0-1.035.931A4.001 4.001 0 0 0 9 14.004V14a3.01 3.01 0 0 0-1.66-2.685A3 3 0 0 0 6 11"/></svg>
            <p className="text-3xl text-frenchgray ml-5 opacity-90 group-hover:opacity-100">Art</p>
          </div>

          {openSections.art && (
            <div className="mb-4 mt-8 w-full text-frenchgray flex flex-col gap-8">

              <p className="text-2xl text-frenchgray w-full font-sans text-center mt-5">Click on an image to view the original size!</p>

              <div className='flex flex-row gap-8'>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/0.webp'} target='_blank'><img src="/img/art/0.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/1.webp'} target='_blank'><img src="/img/art/1.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/2.webp'} target='_blank'><img src="/img/art/2.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
              </div>

              <div className='flex flex-row gap-8'>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/3.webp'} target='_blank'><img src="/img/art/3.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/4.webp'} target='_blank'><img src="/img/art/4.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/5.webp'} target='_blank'><img src="/img/art/5.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
              </div>

              <div className='flex flex-row gap-8'>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/6.webp'} target='_blank'><img src="/img/art/6.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/7.webp'} target='_blank'><img src="/img/art/7.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/8.webp'} target='_blank'><img src="/img/art/8.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
              </div>

              <div className='flex flex-row gap-8'>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/9.webm'} target='_blank'>
                    <video autoPlay playsInline loop className='w-full h-full object-contain bg-black'>
                      <source src="/img/art/9.webm" type="video/webm"/>
                      Your browser does not support the video tag.
                    </video>
                  </Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/10.webm'} target='_blank'>
                    <video autoPlay playsInline loop className='w-full h-full object-contain bg-black'>
                      <source src="/img/art/10.webm" type="video/webm"/>
                      Your browser does not support the video tag.
                    </video>
                  </Link>
                </div>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/11.webm'} target='_blank'>
                    <video autoPlay playsInline loop className='w-full h-full object-contain bg-black'>
                      <source src="/img/art/11.webm" type="video/webm"/>
                      Your browser does not support the video tag.
                    </video>
                  </Link>
                </div>
              </div>

              <div className='flex flex-row gap-8'>
                <div className='w-1/3 h-[40vh] bg-void border-4 border-lion hover:drop-shadow-ostroborea cursor-pointer transition-all duration-300'> 
                  <Link href={'/img/art/12.webp'} target='_blank'><img src="/img/art/12.webp" alt="Art" className='w-full h-full object-contain bg-black'/></Link>
                </div>
              </div>
              
            </div>
          )}
        </div>

        {/* Writing */}
        <div className='mb-8 w-full'>
          <div onClick={() => toggleSection('writing')} className="flex flex-row items-center mb-4 pl-2 border-b-frenchgray border-b-2 w-fit cursor-pointer group">
            <svg width="48" height="48" viewBox="0 0 24 24"><path fill="#C7C2D6" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V10.4q0 .275-.162.475t-.413.3q-.4.15-.763.388T18 12.1l-5.4 5.4q-.275.275-.437.638T12 18.9V21q0 .425-.288.713T11 22zm8-1v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m6.575-4.6l.925-.975l-.925-.925l-.95.95zM14 9h4l-5-5l5 5l-5-5v4q0 .425.288.713T14 9"/></svg>
            <p className="text-3xl text-frenchgray ml-5 opacity-90 group-hover:opacity-100">Writing</p>
          </div>

          {openSections.writing && (
            <div className="mb-4 mt-8 w-full text-frenchgray flex flex-col gap-8">

              <div className='w-full bg-void border-4 border-lion p-4'>
                <h1 className='text-3xl text-africanviolet'>The Star Smith</h1>
                <p className='text-xl text-frenchgray mb-4'>Among the countless Gods that were at the beginning of time, one stood out, being known above all else as a destroyer. She was called Star. Wherever she went, wielding her mighty hammer, cracks, fissures and rifts would follow. She was mocked by the other Gods for her clumsiness and they dismissed her as a nuisance.</p>
                <p className='text-xl text-frenchgray mb-4'>When the world was formed, Star was captivated by its beauty, but she was commanded to never approach it, lest her touch shatter it too. So she lingered in the heavens, watching from afar. For every new wonder she came to love, a flowing river, a mighty mountain, a blooming field, she etched a mark into the sky. Over time, these etchings became a vast tapestry, reflecting the world's splendor back unto itself.</p>
                <p className='text-xl text-frenchgray mb-4'>But Star's admiration grew into a yearning. Unable to contain her wish to see the world up close, she descended to walk among the living. She marveled at the creatures that roamed the land, the majesty of its mountains and valleys, and the way the wind sang through the trees. She felt the sun's warmth and the joy of the earth beneath her feet.</p>
                <p className='text-xl text-frenchgray mb-4'>Yet her joy turned to sorrow when she witnessed the suffering of those who dwelled in the dark. The cold of the night brought fear, pain, and death. Her heart ached for them, for she could not bear to leave them in their misery. Raising her hammer one final time, she struck the ground with purpose. From the crack came fire, a gift from the depths of her heart to bring light to the night and warmth to the cold.</p>
                <p className='text-xl text-frenchgray'>For her defiance, Star was executed by the other Gods. Yet when the first night thereafter came, they looked to the sky and were awestruck. Star's markings now shone as countless lights, illuminating the heavens. Below, the fires she had kindled in mortal hearts burned brightly, as though the world itself blazed in her memory. It was then understood the truth of Star's nature, not a destroyer, but a maker who had shaped beauty from imperfection.</p>
              </div>

              <div className='w-full bg-void border-4 border-lion p-4'>
                <h1 className='text-3xl text-africanviolet'>The Origin of the Null Guard</h1>
                <p className='text-xl text-frenchgray mb-4'>The Shepherd took the responsibility upon himself, of keeping the worst of the Wreath at bay by receiving the mark of sacrifice. In exchange to forfeit his life upon completion of his task, he was granted boundless strength and endurance by the powers that be.</p>
                <p className='text-xl text-africanviolet mb-4'>Excerpt from the Null Testament of the Grand Codex:</p>
                <p className='text-xl text-frenchgray mb-4'>1 In the blasted, wretched depths of the Wreath, he remains.</p>
                <p className='text-xl text-frenchgray mb-4'>2 His sword, awash with the rancid viscera and blood of our enemy.</p>
                <p className='text-xl text-frenchgray mb-4'>3 He bears the mark of sacrifice, may his shield be adorned by the blackened steel of millennia.</p>
                <p className='text-xl text-frenchgray mb-4'>4 There shall be no mercy nor recompense accepted, for their evil is eternal.</p>
                <p className='text-xl text-frenchgray mb-4'>5 For he is their fear, for he is their judgement, for he is their end.</p>
                <p className='text-xl text-frenchgray'>6 He shall save us all.</p>
              </div>
              
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
