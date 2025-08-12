'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LightState() {
  const [status, setStatus] = useState('off');
  const [url, setUrl] = useState('https://cdn-icons-png.flaticon.com/512/2987/2987972.png');

  useEffect(() => {
    if (status === 'off') {
      setUrl('https://cdn-icons-png.flaticon.com/512/2987/2987972.png');
    } else {
      setUrl('https://cdn-icons-png.flaticon.com/512/2987/2987996.png');
    }
  }, [status]);

  const handleClicker = () => {
    if (status === 'off') {
      setStatus('on');
      document.title = 'Ligado';
    } else {
      setStatus('off');
      document.title = 'Desligado';
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-5">Use State PT 2</h1>

        <Image
          src={url}
          alt="img"
          height={100}
          width={100}
        />

        <button className="cursor-pointer mt-4" onClick={handleClicker}>
          <Image
            src={
              status === 'off'
                ? 'https://cdn-icons-png.flaticon.com/512/5683/5683514.png'
                : 'https://cdn-icons-png.flaticon.com/512/5683/5683501.png'
            }
            alt="status button"
            height={100}
            width={100}
          />
        </button>

        <span className="mt-2 text-lg font-semibold">
          {status === 'off' ? 'Desligado' : 'Ligado'}
        </span>
      </div>
    </div>
  );
}
