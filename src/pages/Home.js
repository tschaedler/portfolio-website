import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Resume from "./Resume";
import LayoutHome from "./../components/helper/LayoutHome";

const Home = () => {
	return (
		<LayoutHome>
			<Header />
			<About id="About" />
			<Resume id="Resume" />
			<Contact id="Contact" />
		</LayoutHome>
	);
};

export default Home;
