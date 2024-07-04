import { useState, useEffect } from "react";
import {
	fetchCart,
	updateProductQuantity,
	removeProductFromCart,
	fetchProducts,
} from "../services/api";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";

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

	return (
		<Layout>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product
							</th>
							<th scope="col" className="px-6 py-3 text-center">
								Qty
							</th>
							<th scope="col" className="px-6 py-3 text-center">
								Price
							</th>
							<th scope="col" className="px-6 py-3 text-center">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(cart).map((productId) => {
							const product = products.find(
								(p) => p.id === parseInt(productId)
							);
							if (product) {
								return (
									<CartItem
										key={product.id}
										productId={product.id}
										name={product.name}
										price={product.price}
										cart={cart}
										handleUpdateQuantity={handleUpdateQuantity}
										handleRemoveProduct={handleRemoveProduct}
									/>
								);
							}
							return null;
						})}
					</tbody>
				</table>
			</div>
		</Layout>
	);
}
