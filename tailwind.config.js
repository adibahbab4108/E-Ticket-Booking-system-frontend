/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
            primary:'#1dd100',
            secondary: '#030712',
            couponOne: '#ffbf0f',
            couponTwo: '#f78c9c',
            mobileMenu: '#f7f8f8',
            buttonColor: 'rgba(29, 209, 0, 0.15)',
            
        },
        fontFamily:{
            raleWay:'Raleway',
            Inter: 'Inter',
        }
      },
    },
    plugins: [],
    darkMode: 'false'
  }