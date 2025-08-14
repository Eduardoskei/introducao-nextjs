'use client'

import { useEffect, useState } from "react";

export default function MiniDisplay() {

  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length >= 15  ) {
      setValue(value.slice(0, -1))
    }
  }, [value])

  const handleClicker = (num:number | string) => {
    if (typeof num === 'number') {
      return setValue(value + num);
    } else if (num === 'C') {
      return setValue('');
    } else if (num === '<-') {
      return setValue(value.slice(0, -1));
    } else if (num === '+' || num === '-' || num === '*' || num === '/') {
      setValue(value + num)
    } else if (num === '=') {
      return setValue(eval(value))
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="border border-gray-400 rounded p-4 h-15 w-60 text-center text-xl">
        {value}
      </div>

      <div className="grid grid-cols-3 gap-4 w-60 h-60 mt-4">
        <button onClick={() => handleClicker(0)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>0</button>
        <button onClick={() => handleClicker(1)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>1</button>
        <button onClick={() => handleClicker(2)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>2</button>
        <button onClick={() => handleClicker(3)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>3</button>
        <button onClick={() => handleClicker(4)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>4</button>
        <button onClick={() => handleClicker(5)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>5</button>
        <button onClick={() => handleClicker(6)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>6</button>
        <button onClick={() => handleClicker(7)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>7</button>
        <button onClick={() => handleClicker(8)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>8</button>
        <button onClick={() => handleClicker(9)} className={`bg-blue-300 hover:bg-blue-400 transition cursor-pointer p-5 rounded`}>9</button>
        <button onClick={() => handleClicker('C')} className={`bg-violet-300 hover:bg-violet-400 transition cursor-pointer p-5 rounded`}>C</button>
        <button onClick={() => handleClicker('<-')} className={`bg-violet-300 hover:bg-violet-400 transition cursor-pointer p-5 rounded`}>DEL</button>
        <button onClick={() => handleClicker('+')} className={`bg-green-300 hover:bg-green-400 transition cursor-pointer p-5 rounded`}>+</button>
        <button onClick={() => handleClicker('-')} className={`bg-green-300 hover:bg-green-400 transition cursor-pointer p-5 rounded`}>-</button>
        <button onClick={() => handleClicker('*')} className={`bg-green-300 hover:bg-green-400 transition cursor-pointer p-5 rounded`}>*</button>
        <button onClick={() => handleClicker('/')} className={`bg-green-300 hover:bg-green-400 transition cursor-pointer p-5 rounded`}>/</button>
        <button onClick={() => handleClicker('=')} className={`bg-orange-300 hover:bg-orange-400 transition cursor-pointer p-5 rounded`}>=</button>
      </div>
    </div>
  )
}