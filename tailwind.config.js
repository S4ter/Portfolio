/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Yeseva: ["yeseva one"],
				Ssp: ["source sans pro"],
				Nunito: ["nunito"],
			},
			colors: {},
			backgroundColor: {
				bgdefaultpurple: "#8024a1",
				bgdarkpurple: "#1e0d25",
			},
			fill: {
				defaultpurple: "#8024a1",
				darkpurple: "#1e0d25",
				defaultblack: "#232323",
			},
			borderColor: {
				defaultpurple: "#8024a1",
			},
			backgroundImage: {
				marclean: "url('/src/images/marclean.jpg')",
				icecream: "url('/src/images/icecream2.jpg')",
				webstudio: "url('/src/images/webstudio.jpg')",
				portfolio: "url('/src/images/portfolio.jpg')",
				foto: "url('/src/images/foto.jpg')",
			},
			textColor: {
				// textmaintitle: "#9a00d1",
				textdefault: "#232323",
				textdark: "#e1e1e1",
			},
			boxShadow: {
				box: "0px 2px 12px -3px rgba(0, 0, 0, 0.4)",
				glow: "0px 0px 15px -4px rgba(255, 255, 255, 1)",
			},
			dropShadow: {
				glow: "0px 0px 3px rgba(255, 255, 255, 0.6)",
			},
		},
	},
	plugins: [],
};
