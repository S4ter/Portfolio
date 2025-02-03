import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import icons from "../images/icons.svg";

function Header() {
	const [theme, setTheme] = useState(null);
	const [buttonText, setButtonText] = useState(null);
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}
	}, []);

	useEffect(() => {
		const Appid = document.getElementById("Appid");
		const darkmodebutton = document.getElementById("darkmodebutton");
		if (theme === "dark") {
			Appid.classList.add("dark");
			setButtonText(
				<svg className="w-7 h-7 fill-[#8024a1] dark:fill-white m-auto md:w-8 md:h-8">
					<use xlinkHref={`${icons}#icon-sunrise`} />
				</svg>
			);
		} else {
			Appid.classList.remove("dark");
			setButtonText(
				<svg className="w-7 h-7 fill-[#8024a1] dark:fill-white m-auto md:w-8 md:h-8">
					<use xlinkHref={`${icons}#icon-sunset`} />
				</svg>
			);
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<div>
			<nav className="fixed left-1/2 -translate-x-1/2 top-5 z-20 h-14 w-[70%] flex flex-row justify-evenly items-center md:w-[32rem] border-2 border-solid border-defaultpurple dark:border-white rounded-3xl bg-bgdefaultpurplebg-transparent backdrop-blur-md font-Nunito text-sm sm:text-base font-bold text-textdefault dark:text-white">
				<Link
					to="home"
					smooth={true}
					duration={500}
					className="hover:drop-shadow-glow focus:drop-shadow-glow duration-300 cursor-pointer"
				>
					Home
				</Link>
				<Link
					to="projects"
					smooth={true}
					duration={500}
					className="hover:drop-shadow-glow focus:drop-shadow-glow duration-300 cursor-pointer"
				>
					Projects
				</Link>
				<Link
					to="experience"
					smooth={true}
					duration={500}
					className="hover:drop-shadow-glow focus:drop-shadow-glow duration-300 cursor-pointer"
				>
					Experience
				</Link>
				<Link
					to="contact"
					smooth={true}
					duration={500}
					className="hover:drop-shadow-glow focus:drop-shadow-glow duration-300 cursor-pointer"
				>
					Contact
				</Link>
			</nav>

			<button
				onClick={handleThemeSwitch}
				className="fixed top-5 right-5 p-1 border-2 border-solid border-defaultpurple dark:border-white rounded-3xl bg-bgdefaultpurplebg-transparent backdrop-blur-md font-Nunito z-10 fill-defaultpurple dark:fill-white"
				id="darkmodebutton"
			>
				{buttonText}
			</button>
		</div>
	);
}

export default Header;
