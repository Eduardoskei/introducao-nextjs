'use client'

import { useEffect, useState } from "react"

export default function Stopwatch() {

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000) 
    return () => clearInterval(interval);
  }, [])

  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const secs = String(time % 60).padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl w-40 hover:scale-105 transition">
      <span className="text-gray-500 text-xl">Tempo</span>
      <h1 className="text-2xl font-semibold">{minutes}:{secs}</h1>
    </div>
  )
}