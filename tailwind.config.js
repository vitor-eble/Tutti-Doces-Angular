/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'rosinha-escuro': '#f08080',
        'rosinha': '#ffb6c0',
        'rosaCustom': {
          '50': '#fdf3f3',
          '100': '#fce4e4',
          '200': '#fbcdcd',
          '300': '#f6abab',
          '400': '#f08080',
          '500': '#e44f4f',
          '600': '#d03232',
          '700': '#af2626',
          '800': '#912323',
          '900': '#792323',
          '950': '#410e0e',
        },
        'rosaCustomDark': {
           '50':  '#2b0c0c',
          '100': '#3b1212',
          '200': '#531919',
          '300': '#6d1f1f',
          '400': '#852626',
          '500': '#9e2c2c',
          '600': '#b73636',
          '700': '#ce5151',
          '800': '#e57676',
          '900': '#f6a5a5',
          '950': '#fce4e4',
},
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(255,182,193,1) 0%, rgba(240,128,128,1) 55%)',
      }
    },
  },
  plugins: [],
}

