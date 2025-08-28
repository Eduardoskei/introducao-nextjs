'use client'

import ToggleDark from "@/components/ToggleDark";
import { useState } from "react"

export default function darkTheme() {

  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    return setIsDark(!isDark);
  }

  return (
    <div className={`h-screen w-screen flex flex-col justify-center items-center 
      ${isDark ? 'bg-[#282c34] text-[#efefefef]' : 'bg-white text-[#282c34]'}
    `}> 

      <h1 className="text-2xl font-semibold">{isDark ? 'Dark Theme' : 'Light Theme'}</h1>
      <ToggleDark theme={isDark} handle={handleThemeToggle}/>

    </div>
  )
}