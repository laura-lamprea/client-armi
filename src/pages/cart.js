import { useState, useEffect } from "react";
import {
	fetchCart,
	updateProductQuantity,
	removeProductFromCart,
	fetchProducts,
} from "../services/api";
import Layout from "../components/Layout";

export default function Cart() {
	const [cart, setCart] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchCart().then(setCart);
		fetchProducts().then(setProducts);
	}, []);

	const handleUpdateQuantity = async (productId, quantity) => {
		await updateProductQuantity(productId, quantity);
		setCart({ ...cart, [productId]: quantity });
	};

	const handleRemoveProduct = async (productId) => {
		await removeProductFromCart(productId);
		const updatedCart = { ...cart };
		delete updatedCart[productId];
		setCart(updatedCart);
	};

	const renderCartItems = () => {
		return Object.keys(cart).map((productId) => {
			const product = products.find((p) => p.id === parseInt(productId));
			if (product) {
				return (
					<li key={productId}>
						{product.name} - ${product.price}
						<input
							type="number"
							value={cart[productId]}
							onChange={(e) =>
								handleUpdateQuantity(productId, parseInt(e.target.value))
							}
						/>
						<button onClick={() => handleRemoveProduct(productId)}>
							Remove
						</button>
					</li>
				);
			}
			return null;
		});
	};

	return (
		<Layout>
			<h1>Cart</h1>
			<ul>{renderCartItems()}</ul>
		</Layout>
	);
}
