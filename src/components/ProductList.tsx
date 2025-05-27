
interface Product {
    name: string
    price: number
}

export default function ProductList({name, price}:Product) {
    
    return (
        <div>
            <h1>Nome do produto: {name}</h1>
            <p>Preço: R${price}</p>
        </div>
    )
}