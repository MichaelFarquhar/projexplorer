/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#F9F8FA",
          dark: "#060705",
        },
        surface: {
          DEFAULT: "#F1F0F2",
          dark: "#0e0f0d",
        },
        card: {
          DEFAULT: "#E6DFE0",
          dark: "#3d4648",
        },
        accent: {
          DEFAULT: "#67A6F5",
          dark: "#3A7CE0",
        },
      },
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
};
