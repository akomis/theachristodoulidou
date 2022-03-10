module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      graydark: "#273444",
      gray: "#8492a6",
      graylight: "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      tablet: "640px", // => @media (min-width: 640px) { ... }
      laptop: "1024px", // => @media (min-width: 1024px) { ... }
      desktop: "1280px", // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
