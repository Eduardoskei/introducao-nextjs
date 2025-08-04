import Button from "@/components/Button";

export default function About(){

    return(
        <div>
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <div className="flex w-80 justify-between">
                <Button label="Me click" color="#4295f5"/>
                <Button label="Sair" color="#000"/>
                <Button label="Tinho é veado" color="#000"/>
            </div>
        </div>
    )
}