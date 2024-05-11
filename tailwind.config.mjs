/** @type {import('tailwindcss').Config} */

export default {
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
    require('daisyui'),

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
  }
}
