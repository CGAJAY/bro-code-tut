import React, { useState } from "react";

const ShoppingCart = () => {
	// Initialized state with quantity of 1
	const [quantity, setQuantity] = useState(1);

	// Handle the change event
	const handleQuantityChange = (e) => {
		// Get the new value from the input field
		const newQuantity = e.target.value;

		// Convert the value to a number and update state
		setQuantity(Number(newQuantity));
	};
	return (
		<div>
			<h2>Shopping Cart</h2>
			<label htmlFor="quantity">Quantity:</label>
			<input
				id="quantity"
				type="number"
				value={quantity}
				onChange={handleQuantityChange} // Attach the onChange handler
				min="1" // Prevent setting quantity less than 1
			/>
			<p>Current Quantity: {quantity}</p>
		</div>
	);
};

export default ShoppingCart;
