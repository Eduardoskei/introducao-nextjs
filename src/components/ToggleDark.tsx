

type Props = {
  theme: boolean
  handle: () => void
};

export default function ToggleDark({theme, handle}: Props) {

  return (
    <div>   
      <button 
        className={`p-2 rounded-2xl cursor-pointer transition-all hover:scale-105 duration-450 mt-3 text-xl 
          ${theme ? 'bg-white text-black' : 'bg-[#282c34] text-white'}`} 
        onClick={handle}
        >
        Clique para alternar o tema
      </button>
    </div>
  )
}