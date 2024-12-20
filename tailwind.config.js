export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this path based on your folder structure
  ],
  theme: {
    extend: {
      keyframes: {
        rotateInfinite: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
      },
      animation: {
        rotateInfinite: "rotateInfinite .6s infinite alternate",
      },
      screens: {
        mobile: { max: "480px" },
        tablet: { max: "768px" },
        miniDesktop: { max: "1079px" },
      },
    },
  },
  plugins: [],
};
