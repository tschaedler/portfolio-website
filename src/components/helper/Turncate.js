import React from "react";

const Turncate = ({ substring, children }) => {
	const shortyText = (givenString) => {
		if (substring) {
			return givenString;
		} else {
			return givenString.length > 15
				? givenString.substr(0, 15 - 1) + "..."
				: givenString;
		}
	};

	return <p>{shortyText(children)}</p>;
};

export default Turncate;
