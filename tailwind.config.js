/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx","*./index.html"],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter", "sans-serif"],
        poppin:["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}

