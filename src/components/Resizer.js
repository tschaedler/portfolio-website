import { useEffect, useState } from "react";

const Resizer = ({ onResize, children }) => {
	const [mouseDown, setMouseDown] = useState(false);

	const rightWindowSideStyle = {
		position: "absolute",
		cursor: "ew-resize",
		width: "5px",
		height: "100%",
		zindex: "1",
		right: "0",
		top: "0",
	};

	const handleMouseDown = () => {
		setMouseDown(true);
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			onResize(e.movementX);
		};

		if (mouseDown) {
			window.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [mouseDown, onResize]);

	useEffect(() => {
		const handleMouseUp = () => setMouseDown(false);

		window.addEventListener("mouseup", handleMouseUp);

		return () => {
			window.addEventListener("mouseup", handleMouseUp);
		};
	}, []);

	return (
		<>
			<div
				className="w-1.5 bg-slate-500/60 rounded-full"
				style={rightWindowSideStyle}
				onMouseDown={handleMouseDown}
			></div>
			{children}
		</>
	);
};

export default Resizer;
