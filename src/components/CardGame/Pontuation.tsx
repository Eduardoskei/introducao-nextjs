'use client'

import { useEffect, useState } from "react"

type PontuationProps = {
  match: boolean
}

export default function Pontuation({ match }: PontuationProps) {

  const [points, setPoints] = useState(0)

  useEffect(() => {
    if (match) return setPoints(points => points + 5)
  }, [match])     

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-2 w-40 hover:scale-105 transition">
      <span className="text-gray-500 text-xl"> Pontos</span>
      <h1 className="text-2xl font-semibold">{points}</h1>
    </div>
  )
}