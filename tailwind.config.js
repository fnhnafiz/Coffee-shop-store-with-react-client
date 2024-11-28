/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navbarImg: "url('/assets/more/navbar.jpg')",
        banner: "url('/assets/more/herobaner.png')",
      },
    },
  },
  plugins: [daisyui],
};
