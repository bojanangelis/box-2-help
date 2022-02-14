module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-b2h": "url(../public/b2h.png)",
        "mobile-b2h": "url(../public/b2h-mobile.png)",
      }),
    },
  },
  plugins: [],
};
