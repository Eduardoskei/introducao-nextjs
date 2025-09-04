export default function RestartButton() {

  return (
    <button 
      className="flex justify-center bg-red-500 hover:bg-red-600 shadow-lg rounded-xl p-3 w-40 hover:scale-105 transition cursor-pointer"
      onClick={() => window.location.reload()}
    >
      <h1 className="text-2xl text-white font-semibold">Reiniciar</h1>
    </button>
  )
}