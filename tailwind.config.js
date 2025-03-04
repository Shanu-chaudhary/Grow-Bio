/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green' : '#0c943f',
        'light-green' : '#b1e300ff',
        'dark-orange' : '#bf7222ff',
        'light-orange' : '#e5aa70ff',
        'light-pink' : '#ffe9d4ff',
        'custom-white' : '#f3f5f5',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Dmsans:["DM sans","sans-serif"],
      },
    },

  },
  plugins: [],
}
