
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // if you are using the `/app` directory
  ],
  theme: {
    extend: {
      colors: {
        blueColor : "rgba(128,0,128,0.7)",
        primaryColor: "#00011F",
        secondaryColor: "#0A1016",
        skinColor: "#EFDBA6",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        libre: ['"Libre Baskerville"', 'serif'],
      },
      textShadow: {
        'light-white': '1px 1px 2px rgba(255, 255, 255, 0.6)', // Softer, lighter white shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-light-white': {
          textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)', // Define light white shadow
        },
      }
      addUtilities(newUtilities)
    },

  ],
};
