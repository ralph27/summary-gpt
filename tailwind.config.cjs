/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      gridTemplateRows: {
        layout: "repeat(auto-fill, 120px)",
      },
      gridTemplateColumns: {
        layout: "repeat(12, minmax(0, 1fr))",
      },
      colors: {
        bg: "#23262B",
        brown: "#1E1E1E",
        accent: "#26282D",
        lightGrey: "#383F46",
        darkGrey: "#131517",
        lightGreen: "#558283",
        lighterGreen: "#50D1BC",
        darkGreen: "#2C3335",
        sub: "#D3D3D3",
        smokeWhite: "#E1EEF2",
      },

      fontFamily: {
        bebas: ["var(--bebas-font)"],
        roboto: ["var(--roboto-font)"],
        raleway: ["var(--raleway-font)"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
