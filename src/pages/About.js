import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/PythonLogo.png");
const ReactLogo = require("../assets/ReactLogo.png");
const TypescriptLogo = require("../assets/TypescriptLogo.png");
const JsLogo = require("../assets/JsLogo.png");
const TailwindLogo = require("../assets/TailwindLogo.png");
const SqlLogo = require("../assets/SqlLogo.png");
const MongoDBLogo = require("../assets/MongoDBLogo.png");
const NodeJSLogo = require("../assets/NodeJSLogo.png");
const DockerLogo = require("../assets/DockerLogo.png");
const AngularLogo = require("../assets/AngularLogo.png");
const BootstrapLogo = require("../assets/BootstrapLogo.png");
const CSharpLogo = require("../assets/CSharpLogo.png");
const GatsbyLogo = require("../assets/GatsbyLogo.png");
const PHPLogo = require("../assets/PHPLogo.png");
const JQueryLogo = require("../assets/JQueryLogo.png");
const MySQLLogo = require("../assets/MySQLLogo.png");

const About = () => {
	return (
		<div
			id="About"
			className="items-center justify-center w-full lg:w-4/5 2xl:w-3/5 text-justify"
		>
			<div>
				<div className="table">
					<IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
					<code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
						Über mich
					</code>
					<div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
				</div>
				<div className="text-[#a2aabc] text-lg mt-5">
					<code>
						Ich bin ein Allrounder wenn es ums Entwickeln geht. In
						meinen über 6 Jahren Erfahrung im Bereich
						Anwendungsentwicklung konnte ich viel lernen und mir das
						ein oder andere selber beibringen. Ich definiere mich
						nicht gerne über die Arbeit, die ich geleistet habe. Ich
						definiere mich über die Arbeit, die ich tun möchte.
						Fähigkeiten kann man erlernen, die Persönlichkeit ist
						angeboren. Ich ziehe es vor, weiter zu lernen, mich
						selbst weiter herauszufordern und interessante Dinge zu
						tun, die anderen helfen. Ich selbst sehe mich als
						Problemlöser und das Programmieren, sowie meine
						Kreativität sind Werkzeuge die mir dabei helfen.
					</code>
					<br />
					<br />
					<code>Technologien:</code>
					<div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
						<div className="mb-3">
							<code className="text-[#e6f1ff] underline">
								Programmiersprachen
							</code>
							<div className="flex flex-row mb-3 mt-3">
								<img
									src={JsLogo}
									alt="Js Logo"
									className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
								/>
								<code>JavaScript (ES6+)</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={TypescriptLogo}
									alt="Typescript Logo"
									className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
								/>
								<code>TypeScript</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={PythonLogo}
									alt="Python Logo"
									className="h-5 mr-4 ml-3 text-yellow_vs"
								/>
								<code>Python</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={SqlLogo}
									alt="SQL Logo"
									className="h-5 mr-2 ml-3 text-yellow_vs"
								/>
								<code>SQL</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={MySQLLogo}
									alt="MySQL Logo"
									className="h-5 mr-2  ml-3 text-yellow_vs"
								/>
								<code>MySQL</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={CSharpLogo}
									alt="c-sharp Logo"
									className="h-5 mr-2  ml-3 text-yellow_vs"
								/>
								<code>C#</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={PHPLogo}
									alt="PHP Logo"
									className="h-5 mr-2  ml-3 text-yellow_vs"
								/>
								<code>PHP</code>
							</div>
						</div>
						<div className="mb-3">
							<code className="text-[#e6f1ff] underline">
								Libraries
							</code>
							<div className="flex flex-row mb-3 mt-3">
								<img
									src={BootstrapLogo}
									alt="Bootstrap Logo"
									className="h-5 mr-4 ml-3 text-yellow_vs"
								/>
								<code>Bootstrap CSS</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={TailwindLogo}
									alt="Tailwind Logo"
									className="h-5 mr-4 ml-3 text-yellow_vs"
								/>
								<code>Tailwind CSS</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={JQueryLogo}
									alt="jQuery Logo"
									className="h-5 mr-2  ml-3 text-yellow_vs"
								/>
								<code>jQuery</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={MongoDBLogo}
									alt="MongoDB Logo"
									className="h-5 mr-2 ml-3 text-yellow_vs"
								/>
								<code>MongoDB</code>
							</div>
						</div>
						<div className="mb-3">
							<code className="text-[#e6f1ff] underline">
								Frameworks
							</code>
							<div className="flex flex-row mb-3 mt-3">
								<img
									src={ReactLogo}
									alt="React Logo"
									className="h-5 mr-3 ml-3 text-yellow_vs"
								/>
								<code>React</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={AngularLogo}
									alt="Angular Logo"
									className="h-5 mr-2 ml-3 text-yellow_vs"
								/>
								<code>Angular</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={NodeJSLogo}
									alt="NodeJS Logo"
									className="h-5 mr-2  ml-3 text-yellow_vs"
								/>
								<code>Nodejs</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={DockerLogo}
									alt="Docker Logo"
									className="h-5 mr-2  ml-3 text-yellow_vs"
								/>
								<code>Docker</code>
							</div>
							<div className="flex flex-row mb-3">
								<img
									src={GatsbyLogo}
									alt="Gatsby Logo"
									className="h-5 mr-2  ml-3 text-yellow_vs"
								/>
								<code>Gatsby</code>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
