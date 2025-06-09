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