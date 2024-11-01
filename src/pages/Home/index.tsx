import { useEffect } from 'react'
import api from '../../services/api'

const Home = () => {
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
        </>
    )
}

export default Home;