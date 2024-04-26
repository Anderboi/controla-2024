import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#fff",
        black: "#000",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".scrolling-touch": { "-webkit-overflow-scrolling": "touch" },
      });
    }),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
