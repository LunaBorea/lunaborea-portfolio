import React from 'react'

type TextRingProps = {
  text: string
  textRadius: number
}

export default function TextRing({ text, textRadius }: TextRingProps) {
  const chars = text.split('')
  const innerAngle = textRadius / chars.length

  // Radius in "ch" units
  const radius = 1 / Math.sin((innerAngle * Math.PI) / 180)

  return (
    <span
      className="text-ring text-2xl text-lion text-shadow-ostroborea"
      style={
        {
          '--total': chars.length,
          '--radius': `${radius}ch`
        } as React.CSSProperties
      }
    >
      {chars.map((char, index) => (
        <span
          key={index}
          style={
            {
              '--index': index
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </span>
  )
}
