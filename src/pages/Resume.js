import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
	return (
		<div
			id="Resume"
			className="md:pl-60 w-full lg:w-4/5 2xl:w-3/5 mt-64 lg:ml-48 xl:ml 2xl:ml-96"
		>
			<div>
				<div className="table">
					<ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
					<code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
						Lebenslauf
					</code>
					<div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
				</div>
			</div>
			<div className="text-[#a2aabc] text-lg mt-5">
				<div className="xl:flex xl:flex-row">
					<div className="xl:w-1/4">
						<code className="text-yellow_vs">Berufserfahrung</code>
					</div>
					<div className="pl-20 xl:w-3/4">
						<code className="text-blue_vs">CompuMaster GmbH</code>
						<br />
						<code className="italic text-sm text-lightblue_vs">
							Fachinformatiker Anwendungsentwicklung
						</code>
						<br />
						<code className="text-xs text-brown_vs">
							• Januar 2021 - Heute
						</code>
						<br />
						<code className="text-sm">
							<br />• Entwicklung und Planung von Webseiten und
							Webanwendungen wie Newsletter-Systemen
							<br />• Erstellung und Bearbeitung von Datenbanken
							und Datenbanksystemen
							<br />• Erstellung von Werbematerialien, Designs,
							Grafiken und Logos
							<br />• Identifikation und Lösung von Programmfehler
							sowie Systemstandhaltung
							<br />• Aufsetzung virtueller Testumgebungen
							<br />• Search Engine Optimization für Webseiten
						</code>
					</div>
				</div>
				<div className="xl:flex xl:flex-row pt-10">
					<div className="xl:w-1/4">
						<code className="text-yellow_vs">
							Akademische/ berufliche Ausbildung
						</code>
					</div>
					<div className="pl-20 xl:w-3/4 space-y-7">
						<div>
							<code className="text-blue_vs">
								CompuMaster GmbH
							</code>
							<br />
							<code className="italic text-sm text-lightblue_vs">
								Abschluss: Fachinformatiker
								Anwendungsentwicklung (IHK)
							</code>
							<br />
							<code className="text-xs text-brown_vs">
								• Juli 2018 - Januar 2021
							</code>
						</div>
						<div>
							<code className="text-blue_vs">
								BBS | Berufliches Gymnasium, Simmern
							</code>
							<br />
							<code className="italic text-sm text-lightblue_vs">
								Abschluss: Allgemeine Hochschulreife (Abitur)
							</code>
							<br />
							<code className="text-xs text-brown_vs">
								• Juli 2015 - Juni 2018
							</code>
						</div>
					</div>
				</div>
				<div className="xl:flex xl:flex-row xl:flex-wrap pt-10">
					<div className="xl:w-1/4">
						<code className="text-yellow_vs">
							weitere Fähigkeiten
						</code>
					</div>
					<div className="pl-20 xl:w-3/4">
						<code className="text-sm">
							<br />• Erstellungen von Websites in bekannten
							Content-Management-Systemen (Wordpress, Joomla)
							<br />• Pagebuilder Plugins für Websites (Elementor,
							Divi-Builder)
							<br />• Grafikerstellungsprogramme (Affinity
							Designer, Affinity Photo)
							<br />• 3D Modell Erstellung (Blender)
							<br />• Videoerstellung (Movavi)
						</code>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
