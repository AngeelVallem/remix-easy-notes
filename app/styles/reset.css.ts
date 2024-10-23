import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("*::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("ul[role='list'], ol[role='list']", {
  listStyle: "none",
});

globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
});

globalStyle("a:not([class])", {
  textDecorationSkipInk: "auto",
});

globalStyle("img, picture, svg, video, canvas", {
  maxWidth: "100%",
  height: "auto",
  verticalAlign: "middle",
  fontStyle: "italic",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("body, html", {
  margin: 0,
  boxSizing: "border-box",
  height: "100vh",
  scrollBehavior: "smooth",
  backgroundColor: vars.color.baseBg,
  color: vars.color.baseForeground,
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "1fr",
  padding: vars.space.md,
});
