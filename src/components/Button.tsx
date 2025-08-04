type ButtonProps = {
    label: string
    color: string
}

export default function Button({label, color}: ButtonProps) {
    return (
        <button 
          className={`px-4 py-2 bg-[${color}] text-white cursor-pointer`}
        >
          {label}
        </button>
    )
}