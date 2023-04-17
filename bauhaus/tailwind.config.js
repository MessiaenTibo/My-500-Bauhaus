/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bauhaus-neutral': {
          //100 & 900 are in the design, but are white and black
          300: '#EFEFEF',
          500: '#9D9D9D',
          700: '#414141',
        },
        'bauhaus-primary': {
          500: '#FF3900',
        },
      },
      fontFamily: {
        reross: ['Reross-quadratic', 'sans-serif'],
        'futura-pt': ['Futura PT', 'sans-serif'],
      },
    },
    plugins: [],
  }
}
