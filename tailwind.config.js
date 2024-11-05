/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/dist/**/*.js"],

  theme: {
    extend: {},
  },
  plugins: ["flowbite/plugin"],
};
