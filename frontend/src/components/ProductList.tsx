import { useState, useEffect } from 'react';
import ProductService from "../ProductService";
import { ProductTypes } from "../product";
import ProductForm from "./ProductForm";

const ProductList = () => {
    const [, setProducts] = useState<ProductTypes[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await ProductService.getProducts();
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <ProductForm setProducts={setProducts}/>
        </div>
    );
};

export default ProductList;
