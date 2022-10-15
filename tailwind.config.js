/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "ping-hover": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0px 12px 46px 5px rgb(var(--tw-shadow-color) / 30)",
          },
          "50%": {
            transform: "scale(1.015)",
            boxShadow: "0px 12px 46px 5px var(--tw-shadow-color)",
          },
        },
      },
      animation: {
        "ping-hover": "ping-hover .2s ease-in-out",
      },
      boxShadow: {
        "2xl": "0px 12px 46px 5px rgb(var(--tw-shadow-color) / 30)",
      },
    },
  },
  plugins: [],
};
