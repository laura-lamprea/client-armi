import { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts().then(setProducts);
	}, []);

	return (
		<Layout>
			<ProductList>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						description={product.description}
					/>
				))}
			</ProductList>
		</Layout>
	);
}
