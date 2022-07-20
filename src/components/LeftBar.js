import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	CodeIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	IdentificationIcon,
	ChevronDoubleLeftIcon,
} from "@heroicons/react/solid";
import { MailIcon, ClipboardListIcon } from "@heroicons/react/outline";
import Turncate from "../components/helper/Turncate";

const GitLogo = require("../assets/GitLogo.png");
const LinkedinLogo = require("../assets/LinkedinLogo.png");
const MailLogo = require("../assets/MailLogo.png");

const LeftBar = ({ setLeftBar, setScroll, turncateText, rightPanel }) => {
	const [showCreativeList, setShowCreativeList] = useState(true);
	const [showWebAppList, setShowWebAppList] = useState(true);
	const [showWebsiteList, setShowWebsiteList] = useState(true);
	const [showMockUpList, setShowMockUpList] = useState(true);
	const [showAboutList, setShowAboutList] = useState(true);
	const [showProjectsList, setShowProjectsList] = useState(true);
	let navigate = useNavigate();

	const CreativeList = () => (
		<div>
			<button onClick={() => hideLeftBar("CreativeList")}>
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>Kurzeinblick</Turncate>
				</div>
			</button>
		</div>
	);
	const WebAppList = () => (
		<div>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>
						Newsletter System (Abgespeckt)
					</Turncate>
				</div>
			</a>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>
						E-Commerce-Shop-System
					</Turncate>
				</div>
			</a>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>
						Form-Step-Calculator
					</Turncate>
				</div>
			</a>
		</div>
	);
	const WebsiteList = () => (
		<div>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>
						Fachhandwerk360
					</Turncate>
				</div>
			</a>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>
						Fachhandwerker-Websites
					</Turncate>
				</div>
			</a>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>
						Elektrotechnik-Böcker
					</Turncate>
				</div>
			</a>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12">
					<CodeIcon className="h-5 w-5 ml-5 mr-1   text-yellow_vs" />
					<Turncate substring={turncateText}>RevelryThrive</Turncate>
				</div>
			</a>
		</div>
	);
	const MockUpList = () => (
		<div>
			<a href="/" onClick={() => hideLeftBar()}>
				<div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
					<CodeIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
					<Turncate substring={turncateText}>Ideen</Turncate>
				</div>
			</a>
		</div>
	);

	const AboutList = () => (
		<div>
			<div
				className="ml-10 flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]"
				onClick={() => hideLeftBar("About")}
			>
				<IdentificationIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
				<p>Über mich</p>
			</div>
			<div
				className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-10"
				onClick={() => hideLeftBar("Resume")}
			>
				<ClipboardListIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
				<p>Lebenslauf</p>
			</div>
			<div
				className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-10"
				onClick={() => hideLeftBar("Contact")}
			>
				<MailIcon className="h-5 w-5 ml-5 mr-1   text-yellow_vs" />
				<p>Kontakt</p>
			</div>
		</div>
	);

	const resetRightPanel = () => {
		const panel = rightPanel.current;
		panel.style.removeProperty("margin-left");
		setLeftBar(false);
	};

	const hideLeftBar = (list = "") => {
		switch (list) {
			case "CreativeList":
				navigate("/kreatives/kurzeinblick", { replace: true });
				break;
			case "About":
				navigate("/", { replace: true });
				setScroll("About");
				break;
			case "Resume":
				navigate("/", { replace: true });
				setScroll("Resume");
				break;
			case "Contact":
				navigate("/", { replace: true });
				setScroll("Contact");
				break;
		}
		if (window.innerWidth < 1280) setLeftBar(false);
	};

	return (
		<div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
			<div className="w-full">
				<div className="flex justify-end">
					<button
						className="py-2 px-4 mb-5"
						onClick={() => resetRightPanel()}
					>
						<ChevronDoubleLeftIcon className="h-5 w-5 mr-1 hover:text-yellow_vs " />
					</button>
				</div>
				<div
					className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
					onClick={() => setShowAboutList(!showAboutList)}
				>
					{showAboutList ? (
						<ChevronDownIcon className="h-5 w-5 mr-1  text-yellow_vs" />
					) : (
						<ChevronRightIcon className="h-5 w-5 mr-1  text-yellow_vs" />
					)}
					<p>Thomas Schädler</p>
				</div>
				{showAboutList ? <AboutList /> : null}
				<div
					className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
					onClick={() => setShowProjectsList(!showProjectsList)}
				>
					{showProjectsList ? (
						<ChevronDownIcon className="h-5 w-5 mr-1  text-yellow_vs" />
					) : (
						<ChevronRightIcon className="h-5 w-5 mr-1  text-yellow_vs" />
					)}
					<p>Projekte</p>
				</div>
				{showProjectsList ? (
					<>
						<div
							className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
							onClick={() =>
								setShowCreativeList(!showCreativeList)
							}
						>
							{showCreativeList ? (
								<ChevronDownIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							) : (
								<ChevronRightIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							)}

							<p>Kreatives</p>
						</div>
						{showCreativeList ? <CreativeList /> : null}
						<div
							className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
							onClick={() => setShowWebAppList(!showWebAppList)}
						>
							{showWebAppList ? (
								<ChevronDownIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							) : (
								<ChevronRightIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							)}

							<p>Webanwendungen</p>
						</div>
						{showWebAppList ? <WebAppList /> : null}
						<div
							className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
							onClick={() => setShowWebsiteList(!showWebsiteList)}
						>
							{showWebsiteList ? (
								<ChevronDownIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							) : (
								<ChevronRightIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							)}

							<p>Websites</p>
						</div>
						{showWebsiteList ? <WebsiteList /> : null}
						<div
							className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
							onClick={() => setShowMockUpList(!showMockUpList)}
						>
							{showMockUpList ? (
								<ChevronDownIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							) : (
								<ChevronRightIcon className="h-5 w-5 mr-1  ml-5 text-yellow_vs" />
							)}

							<p>Website-Mockups</p>
						</div>
						{showMockUpList ? <MockUpList /> : null}
					</>
				) : null}
				<div className="absolute inset-x-0 bottom-10 ">
					<div className="flex grid grid grid-cols-3 justify-items-stretch">
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
		</div>
	);
};

export default LeftBar;
