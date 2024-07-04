/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily:{
      'DanaBold':'DanaBold',
      'DanaMedium':'DanaMedium',
      'DanaRegular':'DanaRegular',
      'Morabba-Medium':'Morabba-Medium',
      'Morabba-Light':'Morabba-Light',
      'MorabbaBold':'MorabbaBold'
    },
    extend: {
      colors: {
        'brown':
          {
            '900': '#634832',
            '600': '#967259',
            '300': '#DBC1AC',
            '100': '#ECE0D1'
          }      
      },
      letterSpacing:{
        'tightest':'-0.065em'
      }
    },
  },
  plugins: [],
}

