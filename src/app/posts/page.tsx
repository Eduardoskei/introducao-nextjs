'use client';

import { useState,useEffect } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function PostsPage() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/post?_limit=5");
            const date = await res.json();
            setPosts(date)
        }
        fetchPost()
    }, [])

    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Últimos posts</h1>
            
            {posts.map((posts) => (
                <div key={posts.id} className="bg-violet-400 p-4 rounded-3xl shadow-2xl">
                    <h2 className="text-xl font-semibold">{posts.title}</h2>
                    <p className="text-gray-700">{posts.body}</p> 
                </div>
            ))}

        </div>
    )
}


interface PopupContentProps {
  name: string;
  whatsapp: string;
  phone?: string;
  email?: string;
  iconSrc: any;
}

export function PopupMap({
  name,
  whatsapp,
  phone,
  email,
  iconSrc
}: PopupContentProps) {
  return (
    <div className="bg-[#fffaf3] p-4 rounded-2xl shadow-xl w-80 relative font-sans text-neutral-800">
      <div className="flex items-center mb-4">
        <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
          <img src={iconSrc} alt="Icone" className="w-12 h-12" />
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-neutral-600">Fale com a gente e fique por dentro das novidades.</p>
        </div>
      </div>

      {/* Informações */}
      <div className="space-y-1 text-sm text-neutral-700 mb-4">
        <div className="flex items-center gap-2"><span>📞</span>{whatsapp}</div>
        <div className="flex items-center gap-2"><span>📞</span>{phone}</div>
        <div className="flex items-center gap-2"><span>✉️</span>{email}</div>
        <div className="flex items-center gap-2"><span>🔗</span>Instagram | Facebook | LinkedIn</div>
      </div>

    </div>
  );
}
