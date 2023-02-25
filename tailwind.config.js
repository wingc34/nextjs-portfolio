/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: "#B6F2E1",
        crimson: "#AA706A",
        crepe: "#EFE4E6",
        linen: "#F9F6E4",
        satin: "#F4DBC9",
        lavender: "#BCAFBD",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
