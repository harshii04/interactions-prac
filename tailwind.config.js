/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrim: "#11222d",
        brandColor: "#fff6e5",
        brandBackground: "#20323b",
        highlightGreen: "#bddf76",
      },
    },
    fontFamily: {
      primary: ["Geist", "serif"],
      secondary: ["Geist Mono", "serif"],
    },
  },
  plugins: [],
};
