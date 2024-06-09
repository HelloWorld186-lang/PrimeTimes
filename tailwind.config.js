/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark_white' :  'rgb(130,130,130)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

'rgb(130,130,130)'