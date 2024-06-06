import axios from "axios";
import { ProductTypes } from './product';



const ProductService = {

    // Get Products

    getProducts: async (): Promise<ProductTypes[]> => {
        try {
            const response = await axios.get<ProductTypes[]>(`/api/products`);
            return response.data;
        } catch (error) {
            console.error('Fehler beim Abrufen der Produkte:', error);
            return [];
        }
    },

    // Add Products
    addProducts: async (title: string, amount: number): Promise<ProductTypes | null> => {
        try {
            const response = await axios.post<ProductTypes>(`/api/products`, { title, amount });
            return response.data;
        } catch (error) {
            console.error('Fehler beim Hinzufügen der Produkte:', error);
            return null;
        }
    },
};

export default ProductService;
