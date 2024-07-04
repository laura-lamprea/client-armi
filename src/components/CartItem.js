import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({
	productId,
	name,
	price,
	cart,
	handleUpdateQuantity,
	handleRemoveProduct,
}) => {
	const quantity = cart[productId];

	const handleDecrement = () => {
		if (quantity > 1) {
			handleUpdateQuantity(productId, quantity - 1);
		}
	};

	const handleIncrement = () => {
		handleUpdateQuantity(productId, quantity + 1);
	};
	return (
		<tr className="bg-white border-b  hover:bg-gray-50">
			<td className="px-6 py-4 font-semibold text-gray-500">{name}</td>
			<td className="px-6 py-4">
				<div className="flex items-center">
					<button
						className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
						type="button"
						onClick={handleDecrement}
					>
						<span className="sr-only">Quantity button</span>
						<FaMinus />
					</button>
					<div>
						<span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg px-2.5 py-1 text-center">
							{quantity}
						</span>
					</div>
					<button
						className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
						type="button"
						onClick={handleIncrement}
					>
						<span className="sr-only">Quantity button</span>
						<FaPlus />
					</button>
				</div>
			</td>
			<td className="px-6 py-4 font-semibold text-[#418fde]">{price}</td>
			<td className="px-6 py-4">
				<button
					onClick={() => handleRemoveProduct(productId)}
					className="flex p-2 rounded-md items-center gap-1 font-medium text-red-600 hover:bg-red-200"
				>
					<MdDeleteOutline style={{ fontSize: "20px" }} /> Remove
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
