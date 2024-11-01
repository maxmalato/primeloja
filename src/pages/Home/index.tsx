import { useEffect } from 'react'
import api from '../../services/api'

const Home = () => {
    // type Product = {
    //     id: number,
    //     title: string,
    //     price: number,
    //     category: string,
    //     description: string,
    //     image: string
    // }

    // const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await api.get('/1')
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        loadProducts()
    }, [])
    return (
        <>
            <h1>PrimeLoja</h1>
            {/* <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title} - {product.price}</li>
                ))}
            </ul> */}
        </>
    )
}

export default Home;