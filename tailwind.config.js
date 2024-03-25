/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
    fontFamily: {
     'Vkbold' : ['vkbold'],
     'Vkthin' : ['vkthin'],
     'Vkbtn' : ['vkbtn'],
     'Vkmid' : ['vkmid'],
     'Vkreg' : ['vkreg'],
     'Vklog' : ['login'],
    }
    },
  },
  plugins: [],
}

