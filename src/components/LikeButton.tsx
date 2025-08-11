'use client'

import Image from "next/image";
import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 250);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-600">
      <div className="w-96 h-96 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center select-none">CONTADOR DE LIKES</h2>

        <div className="flex items-center"> 
          <Image    
            src={'https://cdn-icons-png.flaticon.com/512/833/833472.png'}
            alt="Coração"
            width={60}
            height={60}
            className={`
              transform transition-transform duration-200 cursor-pointer
              ${animate ? 'scale-150' : 'hover:scale-125'}
            `}
            onClick={handleClick}
          />
          <h1 className="ml-6 text-4xl font-semibold text-gray-900 select-none">{count}</h1>
        </div>
      </div>
    </div>
  );
}
