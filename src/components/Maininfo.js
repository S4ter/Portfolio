import { useState } from "react";
import icons from "../images/icons.svg";

function Maininfo() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  const email = "patrykp.stefanski@gmail.com";
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <div
      className="relative flex flex-col top-0 h-[36rem] w-full max-w-[768px] m-auto py-36 md:h-[38rem]"
      data-aos="fade-up"
    >
      <div className="mb-5">
        <h2 className="text-textdefault dark:text-white  font-Nunito font-bold text-4xl leading-none md:text-5xl ">
          Patryk Stefański
        </h2>
        <p className="font-Ssp font-light text-2xl text-textdefault dark:text-white  leading-none md:text-3xl">
          Fullstack Developer
        </p>
      </div>
      <div className="mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          className="block m-auto drop-shadow-[10px_0_0_rgba(128,36,161,0.9)] dark:drop-shadow-[10px_0_0_rgba(255,255,255,0.9)] bg-foto bg-cover bg-no-repeat rounded-full"
        ></svg>
      </div>

      <div className="flex flex-col m-auto gap-2 font-Nunito font-bold relative">
        <div className="flex flex-row gap-3 md:gap-5">
          <a
            href="https://www.instagram.com/patryks4ter/"
            className="hover:shadow-glow w-10 h-10 border-2 border-defaultpurple dark:border-white  rounded-full content-center md:w-12 md:h-12 duration-300"
          >
            <svg className="w-6 h-6 fill-[#8024a1] dark:fill-white m-auto md:w-8 md:h-8">
              <use xlinkHref={`${icons}#icon-instagram`} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/patrykstefanski/"
            className="hover:shadow-glow w-10 h-10 border-2 border-defaultpurple dark:border-white  rounded-full content-center md:w-12 md:h-12 duration-300"
          >
            <svg className="w-6 h-6 fill-[#8024a1] dark:fill-white  m-auto md:w-8 md:h-8">
              <use xlinkHref={`${icons}#icon-linkedin2`} />
            </svg>
          </a>
          <div className="flex flex-col items-center">
            <button
              onClick={handleClick}
              className={`hover:shadow-glow flex items-center justify-center w-10 h-10 border-2 border-defaultpurple dark:border-white rounded-full content-center md:w-12 md:h-12 md:origin-left  ${
                isClicked
                  ? "md:origin-left md:w-60 duration-300 md:text-base w-44 text-xs"
                  : "md:origin-left md:w-12 duration-300 "
              }`}
            >
              <span
                className={`dark:text-white text-textdefault  overflow-hidden ${
                  isClicked
                    ? "opacity-100 duration-300 blocks"
                    : "opacity-0 duration-300 hidden"
                }`}
              >
                patrykp.stefanski@gmail.com
              </span>
              <svg
                className={`w-6 h-6 fill-[#8024a1] dark:fill-white md:w-8 md:h-8 ${
                  isClicked ? "duration-300 hidden" : "duration-300"
                }`}
              >
                <use xlinkHref={`${icons}#icon-send-mail`} />
              </svg>
            </button>

            <button
              onClick={handleCopy}
              className={` flex items-center justify-center w-10 h-10 border-defaultpurple dark:border-white rounded-full content-center md:w-10 md:h-10 absolute md:top-12 top-9 ${
                isClicked
                  ? "opacity-100 duration-300"
                  : "opacity-0 duration-300"
              }`}
            >
              <span
                className={`absolute right-10 text-xs md:text-sm text-textdefault dark:text-textdark text-nowrap ${
                  isCopied ? "" : "hidden"
                }`}
              >
                Email copied to clipboard!
              </span>
              <svg
                className={`hover:drop-shadow-glow w-6 h-6 fill-[#8024a1] dark:fill-white md:w-8 md:h-8 duration-300`}
              >
                <use xlinkHref={`${icons}#icon-copy`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <p className="px-7 text-wrap font-Ssp text-lg text-textmaindescription">
        I excel at merging creativity with technology to deliver innovative
        solutions. Check out my work - let's create something exceptional
        together!
      </p> */}
    </div>
  );
}
export default Maininfo;
