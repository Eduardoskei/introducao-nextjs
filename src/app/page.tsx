import Image from "next/image";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="">
      <Welcome/>

      <button><a href="/about">Sobre nós</a></button>
    </div>
  );
}
