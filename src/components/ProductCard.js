import React from "react";
import styles from "./ProductCard.css";

const ProductCard = ({ product }) => {
	const { id, name, price, description } = product;

	return (
		<div className={styles.productCard}>
			{/* <img src={image} alt={name} className={styles.productImage} /> */}
			<div className={styles.productInfo}>
				<h3 className={styles.productName}>{name}</h3>
				<p className={styles.productPrice}>{description}</p>
				<p className={styles.productPrice}>{price}</p>
				<button className={styles.addToCartButton}>Add to Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
