import React from "react";

const UserGreeting = ({
	isLoggedIn,
	username = "User",
}) => {
	// If isLoggedIn is true, it shows a personalized welcome message.
	if (isLoggedIn) {
		return <h2>Welcome {username}</h2>;
	} else {
		// If false, it prompts the user to log in.
		return <h2>Please log in to continue</h2>;
	}
};

export default UserGreeting;
