import React, { useState } from "react";

const Yard = () => {
	const [cars, setCars] = useState([]);
	const [carYear, setCarYear] = useState([
		new Date().getFullYear(),
	]);
	const [carMake, setCarMake] = useState([]);
	const [carModel, setCarModel] = useState([]);

	function handleAddCar() {}
	function handleRemoveCar() {}
	function handleYearChange() {}
	function handleMakeChange() {}
	function handleModelChange() {}

	return (
		<div>
			<h2>List of Car objects</h2>
			<ul></ul>
			<input
				type="number"
				value={carYear}
				onChange={handleYearChange}
			/>{" "}
			<br />
			<input
				type="text"
				value={carMake}
				onChange={handleMakeChange}
				placeholder="Enter car make"
			/>{" "}
			<br />
			<input
				type="text"
				value={carModel}
				onChange={handleModelChange}
				placeholder="Enter car model"
			/>{" "}
			<br />
			<button onChange={handleAddCar}>Add Car</button>
		</div>
	);
};

export default Yard;
