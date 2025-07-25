import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        g100: "#fdfdfd",
        g200: "#ececec",
        g300: "#dadada",
        g400: "#c5c5c5",
        g500: "#b9b9b9",
        g600: "#adadad",
        g700: "#a0a0a0",
        g800: "#909090",
        g900: "#7f7f7f",
        g1000: "#696969",
        g1100: "#4c4c4c",
        g1200: "#0b0b0b",
        black: "#000000",
        white: "#ffffff",
        amb100: "#28C949",
        amb200: "#00FFBF",
        imm100: "#FF4D4D",
        imm200: "#F9CB28",
        com100: "#007CF0",
        com200: "#00DFD8",
      },
    },
  },
  plugins: [],
};
export default config;
