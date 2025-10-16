module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
        suit: "url('assets/bg.jpg')",
        wedding: "url('assets/weddingdate.jpg')",
        bg_full:"url('assets/we.jpg')",

      },
    },
  },
  plugins: [],
};
