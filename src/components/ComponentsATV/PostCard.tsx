'use client'

import { useState } from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  author: string;
  content: string;
  numLikes: number;
  onLike: () => void;
}

export default function PostCard({ author, content, numLikes, onLike }: Props) {
  const [isLiked, setIsLiked] = useState(false);
  
  const handleClicker = () => {
    setIsLiked(!isLiked);
    onLike();
  };

  return (
    <div className="flex justify-center w-full my-4">
      <div className="h-[23vh] w-full max-w-md bg-gray-200 shadow-md rounded-3xl p-4 flex flex-col justify-between">
        <h1 className="font-semibold text-left text-lg">{author}</h1>
        <p className="mt-3 mb-4 text-left text-gray-800">{content}</p>
        <button 
          className="bg-violet-500 hover:bg-violet-600 cursor-pointer transform hover:scale-110 transition text-white flex items-center space-x-2 p-2 rounded-md self-start"
          onClick={handleClicker}
        >
         <FaHeart/> <span>{numLikes}</span>
        </button>
      </div>  
    </div>
  )
}
