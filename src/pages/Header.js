import { useNavigate } from "react-router-dom";

const Header = () => {
	let navigate = useNavigate();
	return (
		<div className="py-60 items-center justify-center w-full 2xl:w-4/5 text-justify">
			<div className="flex flex-col">
				<code className="text-lightblue_vs">Moin🙋‍♂️ ich bin</code>
				<code className="text-[#e6f1ff] text-7xl mt-5">
					Thomas Schädler
				</code>
			</div>
			<button
				className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs xl:w-1/2"
				onClick={() => navigate("/", { replace: true })}
			>
				<code>Hier gehts zu meinen Projekten</code>
			</button>
		</div>
	);
};

export default Header;
