/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JavaScript and JSX files in src
    "./public/index.html",         // Include the index.html file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
