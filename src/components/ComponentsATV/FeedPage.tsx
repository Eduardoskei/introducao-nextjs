'use client'

import { useState } from "react";
import PostCard from "./PostCard";

export default function FeedPage() {

  const PostsList = [
    {
      id: 1,
      author: "Maria",
      content: "Adorei a exposição de arte contemporânea de hoje! Super inspiradora.",
      numLikes: 0
    },
    {
      id: 2,
      author: "João",
      content: "Estudando para a prova de biologia. Alguém tem alguma dica de como memorizar as células?",
      numLikes: 0
    },
    {
      id: 3,
      author: "Ana",
      content: "Que dia lindo para um passeio no parque! Aproveitando cada momento.",
      numLikes: 0
    }
  ];

  const [posts, SetPosts] = useState(PostsList);

  const handleLike = (id: number) => {
    const updatedPosts = [...posts];
    const index = updatedPosts.findIndex(post => post.id === id);
    if (index !== -1) {
      updatedPosts[index].numLikes += 1;
      SetPosts(updatedPosts);
    }
  };

  return (
    <div className="h-screen bg-violet-500 py-10 px-130">
      <div className="bg-[#efefef] h-full rounded-2xl text-center pt-5">
        <h1 className="text-3xl font-semibold">FEED</h1>
        <div className="w-full h-full flex flex-col items-center text-center">
          {posts.map((post) => (
            <PostCard 
              key={post.id} 
              author={post.author} 
              content={post.content} 
              numLikes={post.numLikes}
              onLike={() => handleLike(post.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
