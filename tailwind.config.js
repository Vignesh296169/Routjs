/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    // whenever you configure screen put out side of extend
    screens: {
      sm: '640px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        abc: ["Open Sans", "sans-serif"],
      },
      container: {
        center: true,
        
        // padding:"3rem"
      },
    },
  },
  plugins: [],
};
