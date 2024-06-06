import React, {useState} from "react";




interface PropTypes{
    setProducts:any;
}
const ProductForm: React.FC<PropTypes> = ({ setProducts }) => {
    const [newProductText, setNewProductText] = useState<string>("");

    const handleAddTodo = () => {
        if (newProductText.trim() !== "") {
            const newProduct = {title: newProductText, int: 0}; // Ein einfaches Todo-Objekt erstellen
            setProducts((prevProduct: any) => [...prevProduct, newProduct]); // Das neue Todo der Liste hinzufügen
            setNewProductText(""); // Den Eingabetext zurücksetzen
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
            <button onClick={handleAddTodo}>Add Product</button>
        </div>
    )
}

export default ProductForm