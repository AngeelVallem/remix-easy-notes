import { style } from "@vanilla-extract/css";
import { vars, layout } from "./theme.css";

export const authContainer = style([
  layout,
  {
    color: vars.color.baseForeground,
  },
]);
