/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: { 
      center: true,
      screens: {
        'xl': '1120px',
      },
    },
    extend: {
      fontSize: {
        '8px': '8px',
        '10': '10px'
      }
    },
  },
  plugins: [],
}
