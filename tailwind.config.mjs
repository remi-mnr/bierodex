/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  prefix: "",
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  themes: [
    {
      mytheme: {
        "primary": "#f9b73f",
        "secondary": "#16af8e",
        "accent": "#114036",
        "neutral": "#191919",
        "base-100": "#ffffff",
        "info": "#0000ff",
        "success": "#00ffff",
        "warning": "#00ff00",
        "error": "#ff0000",
      },
    },
    "dark",
  ],
  plugins: [
    require("daisyui"), 
    require("tailwindcss-animate")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f9b73f",
          "secondary": "#16af8e",
          "accent": "#114036",
          "neutral": "#191919",
          "base-100": "#ffffff",
          "info": "#0000ff",
          "success": "#00ffff",
          "warning": "#00ff00",
          "error": "#ff0000",
        },
      },
    ],
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
}
