import Comment from "./Comment";

interface CommentItem {
  name: string;
  message: string;
  timestamp: string;
}

interface CommentListProps {
  comments: CommentItem[];
}

export default function CommentList ({ comments }: CommentListProps) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6 space-y-4">
      <h2 className="text-xl font-semibold text-center mb-4">Comentários</h2>

      {comments.length === 0 ? (
        <p className="text-center text-gray-300">Nenhum comentário ainda.</p>
      ) : (
        comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            message={comment.message}
            timestamp={comment.timestamp}
          />
        ))
      )}
    </div>
  );
};
