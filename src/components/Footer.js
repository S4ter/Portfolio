import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icons from "../images/icons.svg";

export default function Footer() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="dark:bg-bgdarkpurple pt-2 border-t border-defaultpurple dark:border-white">
			<div
				className="flex flex-col text-left mx-8 pb-4 text-textdefault dark:text-white font-Nunito"
				data-aos="fade-right"
			>
				<p className="font-semibold mb-3">Let's have a chat.</p>
				<p className="font-semibold">Contact:</p>
				<a
					href="mailto:patrykp.stefanski@gmail.com"
					className="font-bold underline mb-3 dark:text-textdark"
				>
					patrykp.stefanski@gmail.com
				</a>
				<div className="flex flex-row gap-3 mb-5">
					<svg className="w-7 h-7 fill-defaultblack dark:fill-white">
						<use xlinkHref={`${icons}#icon-instagram`} />
					</svg>
					<svg className="w-7 h-7 fill-defaultblack dark:fill-white">
						<use xlinkHref={`${icons}#icon-linkedin2`} />
					</svg>
				</div>
				<p className="text-center">© Patryk Stefański - 2025</p>
			</div>
		</div>
	);
}
