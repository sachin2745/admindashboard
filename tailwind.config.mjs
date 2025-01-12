/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7956",
        secondary: "#00C4AE",
        tertiary: "#FFD541",
        quaternary: "#100C08",
        spaceblack: "#414A4C",

      },

    },
    fontFamily: {
      Oswald: ['Oswald', 'sans-serif'],
      Josefin_Sans: ['Josefin Sans', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
      Lilita_One: ['Lilita One', 'sans-serif'],
      Syne: ['Syne', 'sans-serif'],
      Allura: ['Allura', 'cursive'],
      Glass_Antiqua: ['Glass Antiqua', 'cursive'],
      Clicker_Scrip: ['Clicker Script', 'cursive'],
      Style_Script: ['Style Script', 'cursive'],
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
