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
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#0AD1BB",
        roseRed: "#CD4163",
        roseRed2: "#B01E68",
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
        "light-bg1": "url('/Cloudy.svg')",
        "dark-bg2": "url('/bg5.jpg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
  plugins: [require("flowbite/plugin")],
};
