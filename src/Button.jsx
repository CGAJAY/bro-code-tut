import React from "react";

const Button = () => {
	function handleClick() {
		console.log("Ouch");
	}
	return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
