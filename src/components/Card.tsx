import Image from "next/image"

type CardProps = {
    title: string
    description: string
    imageUrl: string
}

export default function Card({title, description, imageUrl} : CardProps) {
    return (
        <div className=" p-9 m-5 bg-blue-400 size-2/6 rounded-2xl transform transition duration-300 hover:scale-110 hover:bg-blue-500 cursor-pointer">
            <div className="mb-4"> 
                <Image 
                alt="image"
                src={imageUrl}
                width={50}
                height={50}/>
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>                
            <p className="font-extralight">{description}</p>
        </div>
    )
}