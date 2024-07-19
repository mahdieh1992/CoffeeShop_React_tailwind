/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xm':'400',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      'DanaBold': 'DanaBold',
      'DanaMedium': 'DanaMedium',
      'DanaRegular': 'DanaRegular',
      'Morabba-Medium': 'Morabba-Medium',
      'Morabba-Light': 'Morabba-Light',
      'MorabbaBold': 'MorabbaBold'
    },
    extend: {
      colors: {
        'brown':
        {
          '900': '#634832',
          '600': '#967259',
          '300': '#DBC1AC',
          '100': '#ECE0D1'
        },
        'gray':{
          '100p':'#111111a6'
        }
        
      },
      width: {
        '100': '120px'
      },
      height: {
        '100': '120px'
      },
      letterSpacing: {
        'tightest': '-0.065em'
      },
      backgroundImage: {
        'Desktop': "url('../public/images/headerBgDesktop.webp')",
        'Mobile': "url('../public/images/headerBgMobile.webp')",
     
      
      },
      container: {
        'center': true,
        padding: {
          DEFAULT: '1rem',
          md: '0.625rem'
        }


      },
      
    },
  },
  plugins: [

    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

