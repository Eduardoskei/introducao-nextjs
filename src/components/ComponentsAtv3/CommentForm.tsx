'use client'

import { useState } from "react";

interface CommentFormProps {
  onAddComment: (name: string, message: string) => void;
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAddComment(name.trim(), message.trim());

    setName("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 text-white p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto"
    >
      <div>

         <h2 className="text-center text-2xl">ATIVIDADE</h2>

        <label htmlFor="name" className="block text-sm font-medium">Nome: </label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Digite o seu nome"
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-gray-500 focus:ring-gray-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Mensagem: </label>
        <input
          type="text"
          id="message"
          value={message}
          placeholder="Digite a mensagem"
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-gray-500 focus:ring-gray-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition cursor-pointer"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
