/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    extend: {
      fontFamily: {
        sourceSans: ["Source Sans Pro", "sans serif"],
        inter: ["Inter", "sans serif"],
      },
      colors: {
        lightBlue: "rgba(58,161,255,0.85)",
        darkBlue: "#006CD0",
        solidTint: "#8a8a8a",
        tint: "#5A5a5a",
        smoothTint: "#7a7a7a",
        gray: "#f8f8f8",
        on: "#0039CC",
        off: "rgba(0, 41, 148, 0.43)",
        heading: "#5b5b5b",
      },
    },
  },
  plugins: [],
};
