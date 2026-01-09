'use client'
import React, { useRef, useEffect } from 'react'

type ProjectProps = {
  bgImageUrl: string
  title: string
  genre: string
  githubUrl: string
}

export default function Project({
  bgImageUrl,
  title,
  genre,
  githubUrl
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Current spotlight position
  const current = useRef({ x: 0, y: 0 })
  // Target cursor position
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      // Ease factor (lower = more delay)
      const ease = 0.5

      current.current.x += (target.current.x - current.current.x) * ease
      current.current.y += (target.current.y - current.current.y) * ease

      if (cardRef.current) {
        cardRef.current.style.setProperty(
          '--mouse-x',
          `${current.current.x}px`
        )
        cardRef.current.style.setProperty(
          '--mouse-y',
          `${current.current.y}px`
        )
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    target.current.x = e.clientX - rect.left
    target.current.y = e.clientY - rect.top
  }

  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`
          project-card
          border-4 border-lion w-70 h-90 rounded-3xl
          bg-cover bg-center inset-shadow-rebeccapurple
          inset-shadow-[0_-110px_117px]
        `}
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="relative z-10 flex flex-col h-full justify-end items-center pb-3">
          <p className="text-5xl font-bold text-white">{title}</p>
          <p className="text-2xl font-bold text-white">{genre}</p>
        </div>
      </div>
    </a>
  )
}
