interface CommentProps {
  name: string;
  message: string;
  timestamp: string;
}

export default function Comment({ name, message, timestamp }: CommentProps) {
  return (
    <div className="bg-gray-700 p-4 rounded-md shadow-sm transform hover:scale-105 transition cursor-pointer">
      <p className="text-sm text-gray-300">{timestamp}</p>
      <p className="font-semibold text-white">{name}</p>
      <p className="text-white mt-1">{message}</p>
    </div>
  );
};

