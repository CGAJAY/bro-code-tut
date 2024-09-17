import React, { useState } from "react";

const UserProfile = () => {
	// Initial state with an object
	const [user, setUser] = useState({
		name: "John Doe",
		age: 25,
		location: "New York",
	});

	// Function to update the age
	const updateAge = (e) => {
		setUser((prevUser) => ({
			...prevUser, // Copy all other properties
			age: e.target.value, // Only update age
		}));
	};

	return (
		<div>
			<h2>User Profile</h2>
			<p>Name: {user.name}</p>
			<input
				type="number"
				value={user.age}
				onChange={updateAge}
			/>
			<p>age: {user.age}</p>
			<p>Location: {user.location}</p>
		</div>
	);
};

export default UserProfile;
