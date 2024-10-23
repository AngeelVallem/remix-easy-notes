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

export const container = style({
  width: "100vw",
  minHeight: "100vh",
});

export const layout = style({
  width: "100%",
  height: "100vh",
  padding: vars.space.md,
  backgroundColor: vars.color.baseBg,
});
