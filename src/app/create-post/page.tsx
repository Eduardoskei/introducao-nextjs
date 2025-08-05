'use client'

import React, { use, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"

type FormData = {
    title: string;
    body: string;
}

type ResponseData = {
    id: number;
    title: string;
    body: string;
}


export default function CreatePostPage() {

    const [formData, setFormData] = useState<FormData>({title: '', body: ''});
    const [ResponseData, setResponseData] = useState<ResponseData | null>(null)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement |  HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", formData, {headers: {"Content-Type" : "application/json"}})
        setResponseData(data);
    }

    return (
        <div className="flex items-center justify-center p-6">
            <div>

                <h1 className="text-2xl fo''nt-bold mb-4">Criar novo Post</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium">Título</label>
                        <input
                            onChange={handleChange}
                            className="mt-1 border rounded px-3 py-2 w-full"
                            type="text" 
                            name="title" 
                            placeholder="Seu Título"
                            value={formData.title}
                            required 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Conteúdo</label>
                        <textarea 
                            name="body" 
                            className="mt-1 border rounded px-3 py-2 w-full"
                            rows={2}
                            onChange={handleChange}
                            value={formData.body}
                        />
                    </div>

                    {/* <button className="bg-blue-600 text-white py-2 px-3 hover:bg-blue-700 rounded transition cursor-pointer">Publicar</button> */}
                    <Button variant={"outline"} className="cursor-pointer">Publicar</Button>


                    {ResponseData && (
                        <div className="mt-6 border border-green-500 bg-green-100">
                            <p>Post criado com sucesso</p>
                            <p>ID: {ResponseData.id}</p>
                            <p>Título: {ResponseData.title}</p>
                            <p>Conteúdo: {ResponseData.body}</p>
                        </div>
                    )}

                </form>
            </div>
        </div>
    )

}