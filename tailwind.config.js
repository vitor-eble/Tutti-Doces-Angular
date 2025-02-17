/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'rosinha-escuro': '#f08080',
        'rosinha': '#ffb6c0'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(255,182,193,1) 0%, rgba(240,128,128,1) 55%)',
      }
    },
  },
  plugins: [],
}

