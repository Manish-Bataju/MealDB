export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        laptop: "1280px",
        fold: "1536px",
      },
    },
  },
  safelist: [
    "grid-cols-1",
    "tablet:grid-cols-2",
    "laptop:grid-cols-3",
    "fold:grid-cols-4",
  ],
  plugins: [
    function ({ addVariant }) {
      addVariant("portrait", "@media (orientation: portrait)");
      addVariant("landscape", "@media (orientation: landscape)");
    },
  ],
};
