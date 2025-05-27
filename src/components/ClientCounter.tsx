'use client'

import { use, useState } from "react"

export default function ClientCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Incremetar</button>
        </div>
    )
}