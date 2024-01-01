/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        appBlack: "#212529",
        appYellow: "#F2C944",
        paleOrange: "#FDF8E8",
        appGray: "#4D5154",
        lightGray: "#999B9D",
        appPink: "#FDF8E8",
        appSalmon: "#FAEAB6",
      },
      screens: {
        myScreen: "2000px",
      },
    },
  },
  plugins: [],
};
