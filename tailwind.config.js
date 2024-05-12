/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFF858",
        colFrom: "rgba(46, 47, 47, 1)",
        colTo: "rgba(146, 149, 149, 0)",
      },
      rotate: {
        1: "8deg",
        3: "4deg",
        2: "14deg",
        4: "12deg",
      },
    },
  },
  plugins: [],
};
