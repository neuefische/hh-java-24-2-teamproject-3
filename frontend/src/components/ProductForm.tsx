import React, { useState } from "react";
import ProductService from "../ProductService";

interface PropTypes {
    setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProductForm: React.FC<PropTypes> = ({ setProducts }) => {
    const [newProductText, setNewProductText] = useState<string>("");

    const handleAddProduct = async () => {
        if (newProductText.trim() !== "") {
            try {
                // POST-Anfrage an den Server senden
                const newProduct = await ProductService.addProducts(newProductText, 0);
                if (newProduct) {
                    // Wenn die POST-Anfrage erfolgreich war, aktualisiere den Zustand mit dem neuen Produkt
                    setProducts((prevProducts: any[]) => [...prevProducts, newProduct]);
                    setNewProductText(""); // Den Eingabetext zurücksetzen
                }
            } catch (error) {
                console.error('Fehler beim Hinzufügen des Produkts:', error);
            }
        }
    };

    return (
        <div className="inputForm">
            <input
                type="text"
                value={newProductText}
                onChange={(e) => setNewProductText(e.target.value)}
                autoFocus={true}
                placeholder="Add a Task"
            />
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default ProductForm;
