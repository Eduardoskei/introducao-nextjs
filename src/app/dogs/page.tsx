'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

interface Post {
    message: string
    status: string
}

export default function Dogs() {

    const [dog, setDog] = useState<Post[]>([])

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch("https://dog.ceo/api/breeds/image/random")
            const date = await res.json()
            setDog(date)
        }
        fetchPost()
    }, [])

    return (

        <div>
            <h1>Random Dog</h1>

            {dog.map((dog) => (
                <div>
                    <Image src={dog.message} height={50} width={50}/>
                </div>
            ))}

            <button>Buscar</button>
        </div>

    )

}