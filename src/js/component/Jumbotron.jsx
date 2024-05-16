import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		//here you have to return expected html using the properties being passed to the component
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				target="_blank"
				rel="noreferrer"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};
Jumbotron.defaultProps = {
	title: "A Warm Welcome!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt malesuada suscipit. Proin magna massa, pharetra quis fringilla in, vehicula at lectus. Pellentesque faucibus gravida lorem in blandit.",
	buttonLabel: "Call to Action!"
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};