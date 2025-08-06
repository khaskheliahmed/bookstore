/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'mywhite': '#ffffff', // custom white (optional)
        'custom-blue': '#1E3A8A', // ek custom blue color
      },
    },
    
  },
    plugins: [
    require('daisyui'),
  ],
}