'use client'

import { useState } from "react";

interface counterProps {
    count: number
}

export default function Counter(props:counterProps) {
    const [count, setCount] = useState(props.count);

    return (
        <div className="grid items-center-center">
            <h1 className="bg-blue-300 text-center">Contagem: {count}</h1>

            <button 
              onClick={() => setCount(count + 1)}
              className="bg-red-500 rounded px-4 py-2 hover: hover:bg-red-600 cursor-pointer w-1/2 self-center mt-5"
            >Incrementar</button>

            <button 
              onClick={() => setCount(count - 1)}
              className="bg-blue-500 rounded px-4 py-2 hover: hover:bg-blue-600 cursor-pointer w-1/2 self-center mt-5"
            >Decrementar</button>
        </div>
    )

}