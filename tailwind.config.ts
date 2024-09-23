import type { Config } from "tailwindcss";
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#faf6fe",
          "100": "#f2eafd",
          "200": "#e7d9fb",
          "300": "#d4bbf7",
          "400": "#b78af0",
          "500": "#a064e8",
          "600": "#8944d9",
          "700": "#7532be",
          "800": "#642e9b",
          "900": "#52267d",
          "950": "#36105b",
        },
        boxShadow: {
          xs: "0 1px 2px 0px #14151A0D",
          md: "0 1px 2px 0px #14151A1A, 0 1px 2px 0px #14151A0F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
