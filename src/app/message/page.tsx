'use client'

import CommentForm from "@/components/ComponentsAtv3/CommentForm";
import CommentList from "@/components/ComponentsAtv3/CommentList";
import { useState } from "react";

interface CommentItem {
  name: string;
  message: string;
  timestamp: string;
}

export default function CommentApp() {
  const [comments, setComments] = useState<CommentItem[]>([]);

  const addComment = (name: string, message: string) => {
    const newComment: CommentItem = {
      name,
      message,
      timestamp: new Date().toLocaleString(),
    };
    setComments([newComment, ...comments]);
  };

  return (
    <div className="max-w-full m-auto">
        <div className="mt-10">
            <CommentForm onAddComment={addComment} />
        </div>
        <div className="mb-10">
            <CommentList comments={comments} />
        </div>
    </div>
  );
};