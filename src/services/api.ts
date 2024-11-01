import { Product } from "../types/Product";

export const fetchProducts = async ():Promise<Product[]> => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if(!response.ok) throw new Error ('Erro ao buscar os dados.')
        
        return await response.json()
    } catch (error) {
        console.error(error)
        return []
    }
}