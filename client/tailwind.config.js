/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scale: {
          "50": "#f5e4d7",
          "100": "#e3d4c8",
          "200": "#d0c4b9",
          "300": "#beb3aa",
          "400": "#aca39b",
          "500": "#9a938c",
          "600": "#87837c",
          "700": "#75736d",
          "800": "#63625e",
          "900": "#50524f",
          "950": "#3e4240"
        }
      }
    },
  },
  plugins: [],
}

