/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colLight: '#3a539d',
        colDull: '#3a539d0e',
        colDisabled: '#000'
      },
    },
  },
  plugins: [],
}

