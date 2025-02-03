import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icons from "../images/icons.svg";

export default function Aboutme() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-fit text-left m-auto max-w-[768px] mb-16 dark:bg-bgdarkpurple dark:text-white">
      <h2
        data-aos="fade-up"
        className="text-textdefault dark:text-white font-Nunito font-bold text-2xl leading-none mb-3 mt-2 ml-3"
      >
        Tech stack
      </h2>

      <div className="flex flex-wrap gap-2 mx-3 mb-5" data-aos="fade-up">
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-javascript`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            Javascript
          </p>
        </div>
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-css`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            CSS
          </p>
        </div>
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-react`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            React
          </p>
        </div>
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-nodejs`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            NodeJS
          </p>
        </div>
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-tailwind`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            TailwindCSS
          </p>
        </div>
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-figma`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            Figma
          </p>
        </div>
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-mongodb`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            MongoDB
          </p>
        </div>

        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-github`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            Github
          </p>
        </div>
        <div className="flex items-center p-2 border-2 border-defaultpurple dark:border-white w-fit rounded-xl gap-2">
          <svg className="w-6 h-6 fill-defaultblack dark:fill-white m-auto md:w-8 md:h-8">
            <use xlinkHref={`${icons}#icon-photoshop`} />
          </svg>
          <p className="text-textdefault dark:text-white font-semibold font-Nunito">
            Photoshop
          </p>
        </div>
      </div>

      {/* <div className="px-7 grid grid-cols-2 gap-0 mb-3">
				<ul className="ml-3 mt-3 col-start-2 row-start-2 max-w-[210px] inline-block text-left list-disc list-inside">
					<h3
						data-aos="fade-left"
						className="text-textmaintitle font-Nunito text-xl leading-none"
					>
						Technical skills
					</h3>
					<li
						data-aos="fade-left"
						className="text-wrap font-Ssp font-light text-s text-textmaindescription"
					>
						Technologies: HTML, CSS, SCSS, JS, React, NodeJS, Redux, MongoDB,
						RestAPI, Parcel, Axios
					</li>
					<li
						data-aos="fade-left"
						className="text-wrap font-Ssp font-light text-s text-textmaindescription"
					>
						Development: GIT, VSC
					</li>
					<li
						data-aos="fade-left"
						className="text-wrap font-Ssp font-light text-s text-textmaindescription"
					>
						Simple UI/UX design
					</li>
				</ul>
				<ul
					className="mr-3 mt-3 row-start-3 max-w-[210px] inline-block text-right list-disc list-inside"
					dir="rtl"
				>
					<h3
						data-aos="fade-right"
						className="text-textmaintitle font-Nunito text-xl leading-none"
					>
						Languages
					</h3>
					<li
						data-aos="fade-right"
						className="text-wrap font-Ssp font-light text-s text-textmaindescription"
					>
						Polish (native)
					</li>
					<li
						data-aos="fade-right"
						className="text-wrap font-Ssp font-light text-s text-textmaindescription"
					>
						English (B1)
					</li>
				</ul>
			</div> */}
    </div>
  );
}
