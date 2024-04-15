import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: { dark: "#fff" },
        black: { dark: "#000" },
        "primary-bg": { dark: "#000", light: "#F7F7F7" },
        "secondary-bg": { dark: "#1c1c1e", light: "#FFFFFF" },
        "elevated-1-bg": { dark: "#232323" },
        "elevated-2-bg": { dark: "#282828" },
        "elevated-3-bg": { dark: "#363636" },
        "elevated-4-bg": { dark: "#404040" },
        "transparent-bg": { dark: "#CECECE" },
        "primary-text": { dark: "#E1E3E6", light: "#000000" },
        "secondary-text": { dark: "#a7a7a7", light: "#9C9C9C" },
        "tertiary-text": { dark: "#5D5F61", light: "#616161" },
        "primary-border": { dark: "#262626", light: "#e1e1e1" },
        accent: { light: "#118A65", dark: "#1EAB7D" },
        green: { dark: "#B0D1AD", light: "#D0E9BC" },
        blue: { dark: "#ACCFD2", light: "#A2DEE6" },
        positive: { dark: "#1ed760", light: "#1ed760" },
        negative: { dark: "#f15e6c", light: "#f15e6c" },
        warning: { dark: "#ffa42b", light: "#ffa42b" },
      },
    },
  },
  plugins: [],
};
export default config;
