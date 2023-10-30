/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        mountain: "url('/img/mountain.png')"
      }
    },
  },
  purge: {
    options: {
      // Whitelist classes that are not recognized
      safelist: ['justify-start', 'justify-end'],
    },
  },
  plugins: [],
}

