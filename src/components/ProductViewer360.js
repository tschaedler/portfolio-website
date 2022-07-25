import { useState, useRef } from "react";

const ProductViewer360 = ({ imageAmount, baseFolder }) => {
	const [rangeValue, setRangeValue] = useState("1");
	const imageListRef = useRef("");

	const imageArray = () => {
		let array = [];
		for (let i = 1; i <= imageAmount; i++) {
			array.push(
				<img
					id={i}
					key={i}
					src={require(`../${baseFolder}/${i}.png`)}
					alt="imageSeries"
					width={550}
					height={280}
					style={{ display: i === 1 ? "block" : "none" }}
				/>
			);
		}
		return array;
	};

	const handleChange = (event) => {
		const currentDiv = imageListRef.current;
		// hide last shown image
		currentDiv.querySelector(`[id='${rangeValue}']`).style.display = "none";
		currentDiv.querySelector(`[id='${event.target.value}']`).style.display =
			"block";
		setRangeValue(event.target.value);
	};

	return (
		<div>
			<div ref={imageListRef}>{imageArray()}</div>
			<input
				type="range"
				min="1"
				max="120"
				value={rangeValue}
				onChange={(e) => handleChange(e)}
			></input>
		</div>
	);
};

export default ProductViewer360;
