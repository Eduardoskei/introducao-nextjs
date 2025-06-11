'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

type Post = {
  message: string
  status: string
}

export default function Dogs() {
  const [dog, setDog] = useState<Post | null>(null)

  const fetchPost = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    setDog(data)
    console.log(data)
  }

  useEffect(() => {
    fetchPost() 
  }, [])

  return (
    <div className="flex justify-center">
      <div className="text-center">

        <h1 className="text-2xl font-bold my-3">Random Dog</h1>

        {dog && (
          <div>
            <Image
              className="border rounded"
              alt="Dog image"
              src={dog.message}
              height={250}
              width={250}
              />
          </div>
        )}

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-3 border rounded mt-4 cursor-pointer" onClick={fetchPost}>Buscar</button>

      </div>
    </div>
  )
}
