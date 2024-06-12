import  { useState, useEffect } from 'react';
import ProductService from "../ProductService";
import { ProductTypes } from "../product";
import ProductForm from "./ProductForm";

const ProductList = () => {
    const [products, setProducts] = useState<ProductTypes[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await ProductService.getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Fehler beim Abrufen der Produkte:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <ProductForm setProducts={setProducts} />
            <div>
                {products.map((product: ProductTypes) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Amount: {product.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
