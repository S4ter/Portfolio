import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icons from "../images/icons.svg";

export default function Projects() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="dark:bg-bgdarkpurple">
			<div className="min-h-fit text-left m-auto max-w-[768px]">
				<h2 className="text-textdefault dark:text-white font-Nunito font-bold text-2xl leading-none ml-3">
					My projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-0 gap-5 py-5 rounded-xl">
					<div className=" border-2 border-defaultpurple dark:border-white rounded-xl pb-4">
						<div className="rounded-t-[9px] bg-marclean bg-cover bg-center h-52"></div>
						<div className="px-4 mt-3 mb-20">
							<p className="mb-3 text-textdefault dark:text-white text-lg font-bold font-Nunito">
								MarClean
							</p>
							<p className="mb-3 text-textdefault dark:text-textdark font-Nunito">
								A website created for a cleaning company based in Poland.
							</p>
							<p className="text-textdefault dark:text-white font-semibold font-Nunito">
								Developer, UI/UX Designer | Commercial
							</p>
						</div>
						<div className="flex flex-row justify-between px-4">
							<div className="flex flex-row gap-1">
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									HTML
								</div>
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									SCSS
								</div>
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									Javascript
								</div>
							</div>
							<a href="https://marclean.pl">
								<svg className="border border-defaultpurple dark:border-white rounded-full px-1  w-5 h-5 fill-[#8024a1] dark:fill-white m-auto md:w-8 md:h-8">
									<use xlinkHref={`${icons}#icon-arrow-right`} />
								</svg>
							</a>
						</div>
					</div>
					<div className=" border-2 border-defaultpurple dark:border-white rounded-xl pb-4">
						<div className="rounded-t-[9px] bg-portfolio bg-cover bg-center h-52"></div>
						<div className="px-4 mt-3 mb-20">
							<div>
								<p className="mb-3 text-textdefault dark:text-white text-lg font-bold font-Nunito">
									Portfolio
								</p>
								<p className="mb-3 text-textdefault dark:text-textdark font-Nunito">
									My personal portfolio, where I showcase my projects and the
									skills I've developed.
								</p>
							</div>
							<p className="text-textdefault dark:text-white font-semibold font-Nunito">
								Developer, UI/UX Designer
							</p>
						</div>
						<div className="flex flex-row justify-between px-4">
							<div className="flex flex-row gap-1">
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									React
								</div>
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									TailwindCSS
								</div>
							</div>
							<a href="/">
								<svg className="border border-defaultpurple dark:border-white rounded-full px-1  w-5 h-5 fill-[#8024a1] dark:fill-white m-auto md:w-8 md:h-8">
									<use xlinkHref={`${icons}#icon-arrow-right`} />
								</svg>
							</a>
						</div>
					</div>
					<div className=" border-2 border-defaultpurple dark:border-white rounded-xl pb-4">
						<div className="rounded-t-[9px] bg-icecream bg-cover bg-center h-52"></div>
						<div className="px-4 mt-3 mb-20">
							<div>
								<p className="mb-3 text-textdefault dark:text-white text-lg font-bold font-Nunito">
									IceCream
								</p>
								<p className="mb-3 text-textdefault dark:text-textdark font-Nunito">
									IceCream is a sample website created for an ice cream shop.
								</p>
							</div>
							<p className="text-textdefault dark:text-white font-semibold font-Nunito">
								Developer | Group practice
							</p>
						</div>
						<div className="flex flex-row justify-between px-4">
							<div className="flex flex-row gap-1">
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									HTML
								</div>
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									SCSS
								</div>
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									Javascript
								</div>
							</div>
							<a href="https://weronikababik.github.io/projekt-grupa-6">
								<svg className="border border-defaultpurple dark:border-white rounded-full px-1  w-5 h-5 fill-[#8024a1] dark:fill-white m-auto md:w-8 md:h-8">
									<use xlinkHref={`${icons}#icon-arrow-right`} />
								</svg>
							</a>
						</div>
					</div>
					<div className=" border-2 border-defaultpurple dark:border-white rounded-xl pb-4">
						<div className="rounded-t-[9px] bg-webstudio bg-cover bg-center h-52"></div>
						<div className="px-4 mt-3 mb-20">
							<div>
								<p className="mb-3 text-textdefault dark:text-white text-lg font-bold font-Nunito">
									WebStudio
								</p>
								<p className="mb-3 text-textdefault dark:text-textdark font-Nunito">
									WebStudio is a sample website created for an IT service
									company.
								</p>
							</div>
							<p className="text-textdefault dark:text-white font-semibold font-Nunito">
								Developer | Practice
							</p>
						</div>
						<div className="flex flex-row justify-between px-4">
							<div className="flex flex-row gap-1">
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									HTML
								</div>
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									CSS
								</div>
								<div className="border border-defaultpurple dark:border-white px-2 m-auto rounded-lg font-Nunito text-textdefault dark:text-white font-semibold text-sm">
									Javascript
								</div>
							</div>
							<a href="https://s4ter.github.io/WebStudio">
								<svg className="border border-defaultpurple dark:border-white rounded-full px-1  w-5 h-5 fill-[#8024a1] dark:fill-white m-auto md:w-8 md:h-8">
									<use xlinkHref={`${icons}#icon-arrow-right`} />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1200px] ">
				<div
					data-aos="fade-up"
					className=" text-left rounded-3xl max-w-[450px] hover:bg-[#e3d0ff70] py-3 flex flex-col items-center"
				>
					<a
						href="https://marclean.pl"
						target="_blank"
						rel="noreferrer"
						className="max-w-[55%] h-[100px] block m-auto cursor-pointer"
					>
						<img src={logomarclean} className="" alt="Marclean logo" />
					</a>
					<div className="border-t-4 border-gray-800 max-w-[80%] m-auto pt-4">
						<h4 className="text-textmaintitle font-Nunito font-bold text-2xl leading-none mb-1">
							MarClean
						</h4>
						<p className="text-gray-400 font-Nunito font-light text-sm mb-1">
							UI/UX Designer and Developer | Commercial
						</p>
						<p className=" text-wrap font-Ssp text-lg text-textmaindescription ">
							The website highlights the cleaning company's services, including
							residential and commercial cleaning, with a focus on
							professionalism and customer satisfaction.
						</p>
					</div>
				</div>
				<div
					data-aos="fade-up"
					className="flex flex-col items-center text-left rounded-3xl max-w-[450px] h-[340px] hover:bg-[#e3d0ff70] py-3"
				>
					<a
						href="https://weronikababik.github.io/projekt-grupa-6/"
						target="_blank"
						rel="noreferrer"
						className="max-w-[300px] h-[100px] flex items-center cursor-pointer"
					>
						<img src={icecreamlogo} className="" alt="Marclean logo" />
					</a>
					<div className="border-t-4 border-gray-800 max-w-[80%] pt-4">
						<h4 className="text-textmaintitle font-Nunito font-bold text-2xl leading-none mb-1">
							IceCream
						</h4>
						<p className="text-gray-400 font-Nunito font-light text-sm mb-1">
							Developer | Group Practice
						</p>
						<p className=" text-wrap font-Ssp text-lg text-textmaindescription ">
							A sample website for an ice cream shop, highlighting the menu and
							brand values with a user-friendly design for easy navigation.
						</p>
					</div>
				</div>
				<div
					data-aos="fade-up"
					className="text-left rounded-3xl max-w-[450px] h-[340px] hover:bg-[#e3d0ff70] py-3"
				>
					<a
						href="https://s4ter.github.io/WebStudio"
						target="_blank"
						rel="noreferrer"
						className="max-w-[60%] h-[100px] block m-auto cursor-pointer"
					>
						<img src={webstudiologo} className="" alt="Webstudio logo" />
					</a>
					<div className="border-t-4 border-gray-800 max-w-[80%] m-auto pt-4">
						<h4 className="text-textmaintitle font-Nunito font-bold text-2xl leading-none mb-1">
							WebStudio
						</h4>
						<p className="text-gray-400 font-Nunito font-light text-sm mb-1">
							Developer | Practice
						</p>
						<p className=" text-wrap font-Ssp text-lg text-textmaindescription ">
							A demo website for an IT services company, highlighting their
							services and making it easy for potential clients to get in touch.
							It focuses on clear communication and providing essential
							information quickly.
						</p>
					</div>
				</div>
			</div> */}
		</div>
	);
}
