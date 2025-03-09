/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors:{
        darkTheme: {
          bg_t    : "#0d0c24",
          text_t  : "#f5f5f7"
        },
        lightTheme: {
          bg_t    : "#f5f5f7",
          text_t  : "#070708" 
        }
      }
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
}

