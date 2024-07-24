/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cusFont: ['Merriweather','Montserrat']
      },
      colors:{
        offYellow: '#edbf68',
        yellow: '#f5b744',
        mainText: 'rgb(243,231,197)',
        headingtext: '#9E9484',
        cartBg: '#D3B17B',
        cartItemBg: '#FBD392',
      }
    },
  },
  plugins: [],
}