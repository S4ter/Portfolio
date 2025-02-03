import Header from "./components/Header";
import Maininfo from "./components/Maininfo";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
	return (
		<div
			className="h-screen text-center relative dark dark:bg-bgdarkpurple"
			id="Appid"
		>
			<Header />
			<section id="home">
				<Maininfo />
			</section>
			<Aboutme />
			<section id="projects">
				<Projects />
			</section>
			<section id="experience">
				<Experience />
			</section>
			<section id="contact">
				<Footer />
			</section>
		</div>
	);
}

export default App;
