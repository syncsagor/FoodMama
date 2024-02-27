/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color": "#FF6C22",
        "bg-color": "#F4F4F4",
      },
      fontFamily: {
        "display-font": ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
