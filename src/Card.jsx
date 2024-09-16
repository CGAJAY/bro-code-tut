import "./card.css";
import PropTypes from "prop-types";
const Card = ({ title }) => {
	const photo =
		"https://avatars.githubusercontent.com/u/149392018?s=400&u=d3aeb371064a686556a61983f5202bab15163a28&v=4";
	return (
		<div className="card">
			<img
				src={photo}
				alt="My 3d anime"
				className="photo"
			/>
			<h2 className="title">{title}</h2>
			<p className="desc">I create Websites</p>
		</div>
	);
};
Card.propTypes = {
	title: PropTypes.string,
};

export default Card;
