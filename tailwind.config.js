/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato", "sans-serif"],
      },
      colors: {
        'primary': '#243c5a',
      },
    },
  },
  plugins: [],
}
