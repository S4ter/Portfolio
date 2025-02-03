import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icons from "../images/icons.svg";

export default function Experience() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="dark:bg-bgdarkpurple pt-16">
			<div className="min-h-fit text-left m-auto max-w-[768px]">
				<h2
					data-aos="fade-up"
					className="text-textdefault dark:text-white font-Nunito font-bold text-2xl leading-none ml-3"
				>
					Experience
				</h2>
				<div className="mx-4 md:mx-0 relative py-5">
					<div
						className="flex flex-col gap-7 before:content-[''] border-2 border-defaultpurple dark:border-white rounded-xl py-5  before:bg-[#8024a1] dark:before:bg-white before:w-[2px] before:rounded- before:h-full before:absolute before:left-8 before:top-0"
						data-aos="fade-up"
					>
						<div id="experience_el" data-aos="fade-up">
							<div className="bg-[#8024a1] dark:bg-white rounded-full w-11 h-11 flex justify-center absolute left-3">
								<svg className="w-7 h-7 fill-white dark:fill-darkpurple border:fill-[#8024a1] m-auto ">
									<use xlinkHref={`${icons}#icon-user-tie`} />
								</svg>
							</div>
							<div className=" rounded-lg ml-16 px-3">
								<h4 className="text-textdefault dark:text-white  font-Nunito text-left font-bold text-xl leading-none">
									Helpdesk Specialist
								</h4>
								<p className=" text-textdefault dark:text-white font-Nunito text-left font-semibold text-lg leading-none mb-3">
									Dino Polska S.A.
								</p>
								<p className="text-left text-wrap font-Ssp text-base text-textdefault dark:text-textdark pl-3 mb-3">
									<ul className="list-disc">
										<li>
											Providing onsite, phone, and remote IT support for users
										</li>
										<li>Maintenance and monitoring of IT systems</li>
										<li>
											Logging and tracking support tickets, ensuring status
											updates and SLA compliance, providing users with real-time
											updates
										</li>
										<li>
											Troubleshooting and escalating IT incidents and failures
											to third-party providers
										</li>
										<li>
											Installation and configuration of hardware and software
										</li>
									</ul>
								</p>
								<p className="text-gray-500 dark:text-gray-200 font-Nunito font-light text-sm text-left pl-3">
									03.2023 - Present
								</p>
							</div>
						</div>
						<div id="experience_el" data-aos="fade-up">
							<div className="bg-[#8024a1] dark:bg-white rounded-full w-11 h-11 flex justify-center absolute left-3">
								<svg className="w-7 h-7 fill-white dark:fill-darkpurple border:fill-[#8024a1] m-auto ">
									<use xlinkHref={`${icons}#icon-trophy`} />
								</svg>
							</div>
							<div className="rounded-lg ml-16 px-3">
								<h4 className="text-textdefault dark:text-white font-Nunito text-left font-bold text-xl leading-none">
									Fullstack Developer
								</h4>
								<p className=" text-textdefault dark:text-white font-Nunito text-left font-semibold text-lg leading-none mb-3">
									GoIT (course)
								</p>
								<p className="text-left text-wrap font-Ssp text-base text-textdefault dark:text-textdark pl-3 mb-3"></p>
								<p className="text-gray-500 dark:text-gray-200 font-Nunito font-light text-sm text-left pl-3">
									08.11.2023
								</p>
							</div>
						</div>
						<div id="experience_el" data-aos="fade-up">
							<div className="bg-[#8024a1] dark:bg-white rounded-full w-11 h-11 flex justify-center absolute left-3">
								<svg className="w-7 h-7 fill-white dark:fill-darkpurple border:fill-[#8024a1] m-auto ">
									<use xlinkHref={`${icons}#icon-user-tie`} />
								</svg>
							</div>
							<div className="rounded-lg ml-16 px-3">
								<h4 className="text-textdefault dark:text-white font-Nunito text-left font-bold text-xl leading-none">
									Office Administrator
								</h4>
								<p className=" text-textdefault dark:text-white font-Nunito text-left font-semibold text-lg leading-none mb-3">
									ATS Logistics sp. z o.o.
								</p>
								<p className="text-left text-wrap font-Ssp text-base text-textdefault dark:text-textdark pl-3 mb-3">
									<ul className="list-disc">
										<li>
											Preparing company documents (reports, statements, and
											summaries)
										</li>
										<li>
											Collecting, organizing, and registering letters and
											correspondence
										</li>
										<li>Handling claims and preparing insurance policies</li>
										<li>
											Configuring devices and overseeing the carrier's mobile
											application
										</li>
									</ul>
								</p>
								<p className="text-gray-500 dark:text-gray-200 font-Nunito font-light text-sm text-left pl-3">
									08.2019 - 03.2023
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
