/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors:{
        // grape: "rbga(var{--grape})",
        grape: "var{--grape}",
      }
    },
  },
  plugins: [],
}

