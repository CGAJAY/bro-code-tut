import React, { useState } from "react";

// Component to manage a list of car objects
const Yard = () => {
	// State to hold the list of car objects
	const [cars, setCars] = useState([]);

	// State to hold the year, make, and model of a new car being added
	const [carYear, setCarYear] = useState(
		new Date().getFullYear()
	);
	const [carMake, setCarMake] = useState("");
	const [carModel, setCarModel] = useState("");

	// Function to handle adding a new car to the list
	function handleAddCar() {
		// Create a new car object
		const newCar = {
			year: carYear,
			make: carMake,
			model: carModel,
		};

		// Add the new car to the existing list of cars
		setCars((prevCars) => [...prevCars, newCar]);

		// Reset the input fields to their default values
		setCarYear(new Date().getFullYear());
		setCarMake("");
		setCarModel("");
	}

	// Function to handle changes in the car year input field
	function handleYearChange(e) {
		setCarYear(e.target.value);
	}

	// Function to handle changes in the car make input field
	function handleMakeChange(e) {
		setCarMake(e.target.value);
	}

	// Function to handle changes in the car model input field
	function handleModelChange(e) {
		setCarModel(e.target.value);
	}

	return (
		<div>
			<h2>List of Car objects</h2>

			{/* Display the list of cars */}
			<ul>
				{cars.map((car, i) => (
					<li key={i}>
						{/* Display year, make, and model of each car */}
						{car.year} {car.make} {car.model}
					</li>
				))}
			</ul>

			{/* Input for car year */}
			<input
				type="number"
				value={carYear}
				onChange={handleYearChange}
				id="year"
			/>
			<br />

			{/* Input for car make */}
			<input
				type="text"
				value={carMake}
				onChange={handleMakeChange}
				placeholder="Enter car make"
				id="make"
			/>
			<br />

			{/* Input for car model */}
			<input
				type="text"
				value={carModel}
				onChange={handleModelChange}
				placeholder="Enter car model"
				id="model"
			/>
			<br />

			{/* Button to add a new car */}
			<button onClick={handleAddCar}>Add Car</button>
		</div>
	);
};

export default Yard;
