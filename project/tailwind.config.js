module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/screens/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        accent: "#2f4858",
        background: "#f3f4f6",
        surface: "#f8fafc",
      },
    },
  },
  plugins: [],
};
