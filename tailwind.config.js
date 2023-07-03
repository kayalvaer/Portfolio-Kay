/** @type {import('tailwindcss').Config} */
module.exports = {
  //  lightMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#05093f",
        light: "#edeee5",
        primary: "#4b103c",
        primaryDark: "#44e6d8",
        black: "#000000", //rgb:0, 0, 0;
        cream: "#d6dbdc", //rgb:214, 219, 220;
        white: "#ffffff", //rgb:255, 255, 255;
      },
    },
  },
  plugins: [],
};
