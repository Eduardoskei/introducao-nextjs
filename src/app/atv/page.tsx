import Card from "@/components/Card";

export default function atv() {
    return (
        <div className="flex justify-between">
            <Card
              title="Vivian's Pastelaria e Petiscaria"
              description="Melhor petiscaria de todo o Icaraí"
              imageUrl="https://cdn-icons-png.flaticon.com/512/7609/7609467.png"
            />
             <Card
              title="Daniel Verrísmo"
              description="The Biggest"
              imageUrl="https://cdn-icons-png.flaticon.com/512/1864/1864469.png"
            />
             <Card
              title="Agostinho"
              description="O fugitivo do mundo animal"
              imageUrl="https://cdn-icons-png.flaticon.com/512/8418/8418337.png"
            />
        </div>
    )
}