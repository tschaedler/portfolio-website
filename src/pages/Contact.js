import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
	return (
		<div id="Contact" className="pb-72 mt-36 lg:w-4/5 2xl:w-3/5">
			<div className="table">
				<MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
				<code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
					Kontakt
				</code>
				<div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
			</div>
			<div className="text-[#a2aabc] text-lg mt-5 flex flex-col items-center text-justify">
				<code>
					Falls ich dein Interesse geweckt habe, freue ich mich auf
					eine Antwort oder überzeuge dich auch gerne in einem
					persönlichen Gespräch.
				</code>
				<button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
					<a
						href="mailto:thomasschaedler97@gmail.com"
						rel="noreferrer"
					>
						<code>Schreib mir!</code>
					</a>
				</button>
			</div>
		</div>
	);
};

export default Contact;
