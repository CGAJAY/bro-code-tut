// import { Linter } from "eslint";
import React, { useState } from "react";

const MyComponent = () => {
	const [foods, setFoods] = useState([
		"Apple",
		"Banana",
		"Orange",
	]);

	function handleAddFood() {
		const newFood =
			document.getElementById("foodInput").value;

		document.getElementById("foodInput").value = "";

		setFoods((prevFoods) => [
			...prevFoods, // Copy all other foods
			newFood, // add new food
		]);
	}

	return (
		<div>
			<h2>List of foods</h2>
			<ul>
				{foods.map((food, index) => (
					<li key={index}>{food}</li>
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
