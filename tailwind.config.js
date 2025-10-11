/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        omnitrixGreen: "#00FF7F",
        darkBg: "#0A0A0A",
        omnitrixGlow: "#00FF99",
        omnitrixGray: "#1F1F1F",
      },
      boxShadow: {
        glow: "0 0 15px #00FF7F, 0 0 30px #00FF7F",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gridMove": "gridMove 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100px 100px" },
        },
      },
    },
  },
  plugins: [],
};
