import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    baseBg: "#101012",
    containerBg: "#18181A",
    containerBgForeground: "#1F1F23",
    primary: "#B0E0E6",
    baseForeground: "#fff",
    containerForeground: "#fff",
  },

  // spaces based on https://nekocalc.com/px-to-rem-converter
  space: {
    xxs: "0.08rem",
    xs: "0.1rem",
    sm: "0.2rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "2rem",
    xxl: "3rem",
  },
});

const container = style({
  width: "100vw",
});

export const layout = style([
  container,
  {
    width: "100%",
    backgroundColor: vars.color.baseBg,
  },
]);
