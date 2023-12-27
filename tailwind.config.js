/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'Montserrat':['Montserrat', 'sans-serif']
    },
    extend: {},
    container:{
      center:true,
      padding:{
        DEFAULT:'8px',
        sm:'12px',
        lg:'16px',
        xl:'8px'
      }
    },
    screens:{
      'xs':'400px',
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1024px',
      '2xl':'1280px'
    }
  },
  plugins: [],
}

