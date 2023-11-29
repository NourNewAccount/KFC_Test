module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f2f9ff",
          100: "#f1f3f6",
          400: "#adaeb1",
          "50_01": "#f5faff",
          "100_02": "#f0f4fa",
          "100_01": "#f5f5f7",
          "600_b5": "#78797bb5",
        },
        blue_gray: { 100: "#d9d9d9", 500: "#6a6e8e", 800: "#393f52" },
        red: {
          50: "#fef2f4",
          500: "#ea4235",
          600: "#e93b47",
          A400: "#e4002b",
          A700: "#e0002a",
        },
        pink: { 900: "#66142e", "900_01": "#792937" },
        blue: { A200: "#427eff" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        yellow: { 900: "#f47516" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        notoserifbengali: "Noto Serif Bengali",
        rubik: "Rubik",
        ibarrarealnova: "Ibarra Real Nova",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      boxShadow: ["focus"],
    },
  },
};
