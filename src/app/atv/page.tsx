import Card from "@/components/Card";

const cardData = [
  {
    title: "A Revolução dos Bichos",
    description: "Uma fábula sobre o poder e a corrupção escrita por George Orwell.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3069/3069224.png",
    category: "Livro"
  },
  {
    title: "Interestelar",
    description: "Um épico de ficção científica sobre amor, tempo e espaço. Onde cada segundo é quase uma vida",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/10966/10966862.png",
    category: "Filme"
  },
  {
    title: "The Legend of Zelda",
    description: "Uma aventura lendária em um mundo mágico cheio de mistérios.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1639/1639412.png",
    category: "Jogo"
  },
  {
    title: "1984",
    description: "Um romance distópico que explora vigilância e totalitarismo.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/11379/11379318.png",
    category: "Livro"
  },
  {
    title: "A Origem",
    description: "Um thriller psicológico sobre sonhos dentro de sonhos.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3208/3208713.png",
    category: "Filme"
  },
  {
    title: "Minecraft",
    description: "Um jogo sandbox onde criatividade é o único limite.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2592/2592270.png",
    category: "Jogo"
  }
];

export default function atv() {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
           {cardData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  category={card.category}
                  imageUrl={card.imageUrl}
                  />
           ))}
        </div>
    )
}