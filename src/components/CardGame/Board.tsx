'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Pontuation from "./Pontuation";
import Stopwatch from "./Stopwatch";
import RestartButton from "./RestartButton";

type Card = {
  id: number;
  src: string;
  alt: string;
  flipped: boolean;
  matched?: boolean;
};

export default function Board() {

  const cardsList: Card[]= [
    { id: 1, src: "https://cdn-icons-png.flaticon.com/512/10798/10798254.png", alt: "3 Paus", flipped: false },
    { id: 2, src: "https://cdn-icons-png.flaticon.com/512/10798/10798421.png", alt: "5 Coração", flipped: false },
    { id: 3, src: "https://cdn-icons-png.flaticon.com/512/10798/10798176.png", alt: "Ás Espada", flipped: false },
    { id: 4, src: "https://cdn-icons-png.flaticon.com/512/10798/10798521.png", alt: "10 Ouro", flipped: false },
    { id: 5, src: "https://cdn-icons-png.flaticon.com/512/10798/10798374.png", alt: "Ás Coração", flipped: false },
    { id: 6, src: "https://cdn-icons-png.flaticon.com/512/10798/10798489.png", alt: "Ás Ouro", flipped: false },
    { id: 7, src: "https://cdn-icons-png.flaticon.com/512/10798/10798231.png", alt: "Ás Paus", flipped: false },
    { id: 8, src: "https://cdn-icons-png.flaticon.com/512/10798/10798231.png", alt: "Coringa", flipped: false }
  ];
  
  const sortCard = [...cardsList, ...cardsList].map((card, index) => ({ ...card, id: index + 1 })).sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(sortCard);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [isMatch, setIsMatch] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [maxCard, setMaxCard] = useState(false);

  const handleClicker = (id: number) => {
    if (flippedIds.includes(id) || flippedIds.length === 2 || maxCard ) return;

    setCards(cards =>
      cards.map(card => card.id === id ? { ...card, flipped: !card.flipped } : card)
    );

    setFlippedIds(ids => [...ids, id]);
  };


  useEffect(() => {
    if (flippedIds.length === 2) {
      const firstId = flippedIds[0];
      const secondId = flippedIds[1];
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard && secondCard) {
        if (firstCard.src === secondCard.src) {
          setCards(cards =>
            cards.map(card =>
              card.id === firstId || card.id === secondId ? { ...card, matched: true } : card )
          );
          setIsMatch(true);
          setFlippedIds([])
          setTimeout(() => setIsMatch(false), 200);
        } else {
          setIsMatch(false);
          setTimeout(() => {
            setCards(cards =>
              cards.map(card =>
                card.id === firstId || card.id === secondId ? { ...card, flipped: false } : card
              )
            );
            setFlippedIds([]);
            setMaxCard(false)
          }, 1000);
        }
      }
    }
  }, [flippedIds, cards]);

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setIsWin(true);
    }
  }, [cards]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="flex gap-6 mb-6">
        <Stopwatch/>
        <Pontuation match={isMatch}/>
      </div>

      {isWin && (
        <div className=" bg-green-200 p-4 rounded shadow-lg">
          <h1 className="text-3xl font-bold text-green-800">Todos os pares foram encontrados, parabéns!</h1>
        </div>
      )}

      <div className="grid grid-cols-4 grid-rows-4 gap-4 p-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-center w-30 h-30 bg-white rounded-xl hover:scale-105 transition"
          >
            <button onClick={() => handleClicker(card.id)} className="cursor-pointer">
              <Image
                src={card.flipped ? card.src : 'https://cdn-icons-png.flaticon.com/512/12425/12425729.png'}
                alt={card.alt}
                height={150}
                width={150}
              />
            </button>
          </div>
        ))}
      </div>
      
      <div className="my-5 flex justify-center">
        <RestartButton/>
      </div>
    </div>
  );
}
