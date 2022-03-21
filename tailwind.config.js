module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./sections/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "768px", // => @media (min-width: 768px) { ... }
			md: "1024px", // => @media (min-width: 1024px) { ... }
			lg: "1280px", // => @media (min-width: 1280px) { ... }
		},
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
			vollkorn: ["Vollkorn", "serif"],
			notoserif: ["Noto Serif Display", "serif"],
		},
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
