module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-red": {
          DEFAULT: "#750D37",
        },
        "primary-blue": {
          DEFAULT: "#8296CB",
          darker: "#12263A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
