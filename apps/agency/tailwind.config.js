/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../shared/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          cyan: "#00F3FF",
          gold: "#FFD700",
          dark: "#020406",
          accent: "#FF0055",
        },
      },
    },
  },
  plugins: [],
};



