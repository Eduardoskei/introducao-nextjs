'use client'

import { Check, X } from "lucide-react";
import { useState } from "react";

export default function ListaDeCompras() {

  const CartList = [
    { item: 'Ovo', purchased: false },
    { item: 'Leite', purchased: true },
    { item: 'Pão', purchased: false },
    { item: 'Arroz', purchased: true },
    { item: 'Feijão', purchased: false },
    { item: 'Café', purchased: true },
    { item: 'Manteiga', purchased: false },
    { item: 'Queijo', purchased: true },  
  ];

  const [cart, setCart] = useState(CartList);

  const handleClicker = (index: number) => {
    setCart(cart.map((cartItem, itemIndex) => itemIndex === index ? {...cartItem, purchased: !cartItem.purchased} : cartItem))
  }
  
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-6">Lista de Compras</h1>
      <ul className="w-full max-w-md space-y-3">
        {cart.map((cartItem, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 rounded-2xl shadow-md transition transform hover:scale-105 
              ${cartItem.purchased && "bg-gray-100 text-gray-500 line-through" }`}
          >
            <span className="text-lg font-medium">{cartItem.item}</span>
            <span className="text-lg font-medium">
              <button className="cursor-pointer" onClick={() => handleClicker(index)} >{cartItem.purchased ? <Check/> : <X/>}</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
