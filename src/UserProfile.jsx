import React, { useState } from "react";

const UserProfile = () => {
	// Initial state with an object
	const [user, setUser] = useState({
		name: "John Doe",
		age: 25,
		location: "New York",
	});

	// Function to update the age
	const updateAge = () => {
		setUser((prevUser) => ({
			...prevUser, // Copy all other properties
			age: prevUser.age + 1, // Only update age
		}));
	};

	return (
		<div>
			<h2>User Profile</h2>
			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Location: {user.location}</p>
			<button onClick={updateAge}>Increase Age</button>
		</div>
	);
};

export default UserProfile;
