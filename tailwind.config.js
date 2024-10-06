/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "toystory": "url('/toystore.jpg')",
      },
      fontFamily: {
        "Walter": ["Walter Turncoat", "cursive"],
        "Lato": ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}