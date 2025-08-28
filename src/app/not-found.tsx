import Link from "next/link";

export default function page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Página não encontrada.</h1>
      <button 
        className="p-2 mt-3 text-white text-xl font-semibold bg-violet-600 hover:bg-violet-700 transition cursor-pointer transform hover:scale-105 rounded-xl">
        <Link href={'/'}>Voltar para a pagina Home</Link>
      </button>
    </div>
  )
}