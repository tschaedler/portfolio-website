import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import LeftBar from "./components/LeftBar";
import Resizer from "./components/Resizer";
import Home from "./pages/Home";
import CreativeWork from "./pages/CreativeWork";

const GitLogo = require("./assets/GitLogo.png");
const LinkedinLogo = require("./assets/LinkedinLogo.png");
const MailLogo = require("./assets/MailLogo.png");

const App = () => {
	const [showLeftBar, setShowLeftBar] = useState(true);
	const [turncateText, setTurncateText] = useState(false);
	const [scroll, setScroll] = useState();
	const leftPanelRef = useRef(null);
	const rightPanelRef = useRef(null);

	const handleResize = (movementX) => {
		const panelLeft = leftPanelRef.current;
		const panelRight = rightPanelRef.current;

		if (!panelLeft || !panelRight) return;

		const { width } = panelLeft.getBoundingClientRect();

		panelLeft.style.width = `${width + movementX}px`;
		panelLeft.style.maxWidth = "500px";
		panelLeft.style.minWidth = "260px";
		if (window.innerWidth >= 1280)
			panelRight.style.marginLeft = `${width - movementX}px`;
		substringText(width + movementX);
	};

	const substringText = (barWidth) => {
		//355px is the width of bar where whole text can be shown
		if (barWidth >= 355) {
			setTurncateText(true);
		} else {
			setTurncateText(false);
		}
	};

	const resetLeftPanel = () => {
		substringText(0);
		setShowLeftBar(true);
	};

	useEffect(() => {
		if (window.innerWidth < 1280) {
			setShowLeftBar(false);
		}
	}, []);

	useEffect(() => {
		if (scroll)
			return document.getElementById(scroll).scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			});
	}, [scroll]);

	return (
		<BrowserRouter>
			{showLeftBar ? (
				<div
					className="bg-[#262526] w-72 fixed h-full"
					ref={leftPanelRef}
				>
					<Resizer onResize={handleResize}>
						<LeftBar
							scroll={scroll}
							setScroll={setScroll}
							setLeftBar={setShowLeftBar}
							turncateText={turncateText}
							rightPanel={rightPanelRef}
						/>
					</Resizer>
				</div>
			) : (
				<div
					className="bg-[#404040] w-50 fixed h-full"
					style={{ width: "56px", minWidth: "56px" }}
				>
					<div className="flex justify-end">
						<button
							className="py-2 px-4 mb-5 mt-5"
							onClick={() => resetLeftPanel()}
						>
							<ChevronDoubleRightIcon className="h-5 w-5 mr-1 text-[#a2aabc] hover:text-yellow_vs " />
						</button>
					</div>
					<div className="absolute inset-x-0 bottom-10 ">
						<div className="grid justify-items-stretch space-y-6">
							<a
								href="https://github.com/tschaedler"
								target="_blank"
								rel="noopener noreferrer"
								className="justify-self-center"
							>
								<img
									src={GitLogo}
									alt="Git Logo"
									className="h-10 w-10 text-yellow_vs hover:cursor-pointer"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/thomasschaedler/"
								target="_blank"
								rel="noopener noreferrer"
								className="justify-self-center"
							>
								<img
									src={LinkedinLogo}
									alt="Linkedin Logo"
									className="h-10 w-10 text-yellow_vs hover:cursor-pointer"
								/>
							</a>
							<a
								href="mailto:thomasschaedler97@gmail.com"
								rel="noreferrer"
								className="justify-self-center"
							>
								<img
									src={MailLogo}
									alt="Mail Logo"
									className="h-10 w-10 text-yellow_vs hover:cursor-pointer"
								/>
							</a>
						</div>
					</div>
				</div>
			)}
			<div className="App flex bg-[#1e1e1e]">
				<div
					className="bg-[#1e1e1e] h-full ml-0 xl:ml-72 w-full"
					ref={rightPanelRef}
				>
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route
							exact
							path="/kreatives/kurzeinblick"
							element={<CreativeWork />}
						></Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
