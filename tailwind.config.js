const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", defaultTheme.fontFamily.sans],
      },
      screens: {
        "2k": "1920px",
      },
    },
  },
  plugins: [],
};
