module.exports = {
  darkMode: "media",
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@shadcn/ui/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dreamyPink: "#F8C8DC",
        pastelBlue: "#A0E7E5",
        lavender: "#B388EB",
        darkBlue: "#1A1A2E",
        softWhite: "#fefefe",
      },
      fontFamily: {
        dreamy: ["'Pacifico'", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};