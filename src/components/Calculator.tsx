'use client'

import { useEffect, useState } from "react"

export default function Calculator() {
  
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (display.length >= 15) {
      setDisplay(display.slice(0, -1))
    }
  })

  const handleClicker = (value: string | number) => {
     if (typeof value === 'number') {
      setDisplay(display + value);
    } else if (value === 'C') {
      setDisplay('');
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      setDisplay(display + value);
    } else if (value === '=') {
      if (display[0] === '0') {
        const safeDisplay = display.replace(/^0+(\d)/, '$1');
        setDisplay(eval(safeDisplay))
      }else setDisplay(eval(display))
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-gray-400 p-5 rounded-md">
        <div className="border border-gray-400 rounded-sm bg-cyan-300 p-4 h-15 w-60 text-end text-xl">
          {display}
        </div>

        <div className="grid grid-cols-4 gap-6 mt-6">
            <button onClick={() => handleClicker(7)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">7</button>
            <button onClick={() => handleClicker(8)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">8</button>
            <button onClick={() => handleClicker(9)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">9</button>
            <button onClick={() => handleClicker('/')} className="bg-green-400 text-black p-2 cursor-pointer hover:bg-green-500 transition text-3xl">÷</button>
            <button onClick={() => handleClicker(4)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">4</button>
            <button onClick={() => handleClicker(5)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">5</button>
            <button onClick={() => handleClicker(6)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">6</button>
            <button onClick={() => handleClicker('*')} className="bg-green-400 text-black p-2 cursor-pointer hover:bg-green-500 transition text-3xl">x</button>
            <button onClick={() => handleClicker(1)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">1</button>
            <button onClick={() => handleClicker(2)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">2</button>
            <button onClick={() => handleClicker(3)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">3</button>
            <button onClick={() => handleClicker('-')} className="bg-green-400 text-black p-2 cursor-pointer hover:bg-green-500 transition text-3xl">-</button>
            <button onClick={() => handleClicker(0)} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">0</button>
            <button onClick={() => handleClicker('C')} className="bg-white text-black p-2 cursor-pointer hover:bg-gray-300 transition text-3xl">C</button>
            <button onClick={() => handleClicker('+')} className="bg-green-400 text-black p-2 cursor-pointer hover:bg-green-500 transition text-3xl">+</button>
            <button onClick={() => handleClicker('=')} className="bg-orange-400 text-black p-2 cursor-pointer hover:bg-orange-500 transition text-3xl">=</button>
        </div>
        
      </div>
    </div>

  )
}