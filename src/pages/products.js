import { useState, useEffect } from 'react';
import { fetchProducts, addProductToCart } from '../services/api';
import Layout from '../components/Layout';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    const handleAddToCart = async (productId) => {
        await addProductToCart(productId, 1);
        alert('Product added to cart');
    };

    return (
        <Layout>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}