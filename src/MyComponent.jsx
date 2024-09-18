// import { Linter } from "eslint";
import React, { useState } from "react";

const MyComponent = () => {
	// Initializing the state 'foods' with an array of initial food items
	const [foods, setFoods] = useState([
		"Apple",
		"Banana",
		"Orange",
	]);

	function handleAddFood() {
		// Get the value from the input field
		const newFood =
			document.getElementById("foodInput").value;
		// Clear the input field after the value is retrieved
		document.getElementById("foodInput").value = "";
		// Update the state by adding the new food to the existing list
		setFoods((prevFoods) => [
			...prevFoods, // Copy the previous foods in the array
			newFood, // Append the new food item
		]);
	}
	// Function to handle removing a food item by index
	function handleRemoveFood(index) {
		// Update the state by filtering out the item at the given index
		setFoods(foods.filter((_, i) => i !== index));
	}
	return (
		<div>
			<h2>List of foods</h2>
			{/* Mapping over the 'foods' array to display each item in an unordered list */}
			<ul>
				{foods.map((food, index) => (
					<li
						key={index}
						onClick={() => handleRemoveFood(index)}
					>
						{food}
					</li>
				))}
			</ul>
			<input
				type="text"
				id="foodInput"
				placeholder="Enter food Name"
			/>
			<button onClick={handleAddFood}>Add Food</button>
		</div>
	);
};

export default MyComponent;
