import React from "react";
import { addProductToCart } from "../services/api";
import { MdAddShoppingCart } from "react-icons/md";

const ProductCard = ({ id, name, price, description }) => {
	const handleAddToCart = async () => {
		await addProductToCart(id, 1);
		alert("Product added to cart");
	};
	return (
		<div className="flex flex-col justify-between w-full min-w-[200px] max-w-md bg-white border border-gray-200 rounded-lg shadow p-5">
			<section>
				<h5 className="font-bold tracking-tight text-gray-900 mb-2 truncate">
					{name}
				</h5>
				<p className="text-sm text-gray-400">{description}</p>
			</section>
			<div>
				<span className="text-lg font-bold text-[#418fde]">{price}</span>
				<button
					onClick={() => handleAddToCart()}
					className="w-full flex items-center justify-center gap-2 text-white bg-[#418fde] hover:bg-[#4283c4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
				>
					<MdAddShoppingCart style={{ fontSize: "20px" }} />
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
