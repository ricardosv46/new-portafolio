/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
      Saira_semibold: ['FontCustom_SemiBold'],
      Saira_medium: ['FontCustom_SemiBold'],
      Saira_regular: ['FontCustom_Regular'],
      Saira_black: ['FontCustom_Black'],
      Saira_bold: ['FontCustom_Bold']
    },
      colors: {
        primary: {
          50: "#def4ff",
          100: "#b0daff",
          200: "#80c1ff",
          300: "#50a8fe",
          400: "#268ffc",
          500: "#1375e4",
          600: "#085bb2",
          700: "#004180",
          800: "#00274f",
          900: "#000e1f",
        },
        // secondary: {
        //   50: "#e2f9f6",
        //   100: "#c7e5e3",
        //   200: "#aad1cf",
        //   300: "#8cbeba",
        //   400: "#6daba7",
        //   500: "#54928d",
        //   600: "#3f716e",
        //   700: "#2b524f",
        //   800: "#143230",
        //   900: "#001313",
        // },
      },
    },
  },
  plugins: [],
};
