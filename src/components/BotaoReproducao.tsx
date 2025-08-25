'use client'

import { Pause, Play } from "lucide-react";
import { useState } from "react";

export default function BotaoReproducao() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicker = () => setIsClicked(!isClicked);

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={handleClicker}
        className="flex items-center gap-3 px-6 py-3 bg-violet-600 hover:bg-violet-700 cursor-pointer border transform text-white rounded-full shadow-lg hover:scale-105 transition duration-300"
      >
        {isClicked ? (
          <>
            <Pause size={28} />
            <span className="font-medium text-lg">Pause</span>
          </>
        ) : (
          <>
            <Play size={28} />
            <span className="font-medium text-lg">Play</span>
          </>
        )}
      </button>
    </div>
  );
}
