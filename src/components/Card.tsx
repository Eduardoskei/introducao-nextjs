interface CardProps {
    title: string
    subtitle: string
    icon: string
}

export default function Card({title, subtitle, icon}:CardProps) {
    return(    
            <div className=" p-9 m-5 bg-blue-400 size-2/6 rounded-2xl">

                <div className="text-4xl mb-5">{icon}</div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="font-extralight">{subtitle}</p>

            </div>
    )   
}