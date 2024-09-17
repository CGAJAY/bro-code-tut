// import { Linter } from "eslint";
import React, { useState } from "react";

const MyComponent = () => {
	const [foods, setFood] = useState([
		"Apple",
		"Banana",
		"Orange",
	]);

	function handleAddFood() {}
	function handleARemoveFood() {}
	return (
		<div>
			<h2>List of foods</h2>
			<ul>
				{foods.map((food, index) => (
					<li key={index}>{food}</li>
				))}
			</ul>
		</div>
	);
};

export default MyComponent;
