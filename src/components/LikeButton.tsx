'use client'

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 


export default function LikeButton() {

  const [isLiked, setIsLiked] = useState(false);

  const handleClicker = () => {
    if (isLiked === false) return setIsLiked(true);  
    return setIsLiked(false);
  };

  return (
    <div className="h-screen flex items-center">
      <button 
        className="bg-violet-500 hover:bg-violet-600 cursor-pointer transform hover:scale-125 transition text-white flex items-center space-x-2 p-2 rounded-md"
        onClick={handleClicker}
      >
        {isLiked ? (
          <>
            <span><FaHeart/></span>
            <span>Curtido</span>
            
          </>
        ) : (
          <>
            <span><FaRegHeart/></span>
            <span>Curtir</span>
          </>
        )}
        
      </button>
    </div>
  )
} 
