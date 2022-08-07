/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  options: {
    safelist: ["leading-1", "items-start"],
  },
  darkMode: "class",
  plugins: [],
};
