// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Your React or JS files
  ],
  darkMode:'class',
  theme: {
    extend: {},
   
  },
  plugins: [
    require('daisyui'),
  ],
}
