'use client'

import { useEffect, useState } from "react"

export default function EffectCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("UseEffect foi execultado");
        document.title = count.toString()
    }, [count])

    return (
        <div className="text-center p-10">

            <h1>Contagem: {count} </h1>
            <button
                className="bg-blue-100 hover:bg-blue-200 rounded p-2 m-2 cursor-pointer items-center flex" 
                onClick={() => setCount(count + 1)}>Incrementar
            </button>

            <button
                className="bg-blue-100 hover:bg-blue-200 rounded p-2 m-2 cursor-pointer items-center flex" 
                onClick={() => setCount(0)}>Resetar
            </button>

        </div>
    )
}