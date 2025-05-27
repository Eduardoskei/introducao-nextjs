import ProductList from "@/components/ProductList"

export default function Products() {
    return (
        <div>
            <ProductList name="Pão integral" price={2}/>
            <ProductList name="Salgado de frango" price={5}/>
            <ProductList name="Coca-Cola Zero" price={4}/>
        </div>
    )
}