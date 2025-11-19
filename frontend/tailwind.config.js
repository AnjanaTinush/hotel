/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // ✅ App Router
    './src/app/component/**/*.{js,ts,jsx,tsx}', // ✅ Your actual folder
    './src/app/ui/**/*.{js,ts,jsx,tsx}',        // ✅ UI folder if needed
    './src/components/**/*.{js,ts,jsx,tsx}',    // Optional fallback
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006D77',     // Caribbean Current
        secondary: '#83C5BE',   // Tiffany Blue
        background: '#EDF6F9',  // Alice Blue
        accent: '#FFDDD2',      // Pale Dogwood
        highlight: '#E29578',   // Atomic Tangerine
      },
    },
  },
  plugins: [],
};
