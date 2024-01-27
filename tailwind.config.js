/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#0AD1BB",
        roseRed: "#CD4163",
        neonGreen: "#A1F7A1",
        darkBg: "#111827",
        darkCard: "#1F2937",
        paragraph: "#9CA3AF",
        green: "#13ce66",
        input: "#374151",
        cognac: "#BE9685",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg4.jpg')",
        "dark-bg": "url('/bg11.jpg')",
        "light-bg1": "url('/bg9.jpg')",
        "dark-bg2": "url('/bg5.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
