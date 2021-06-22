import { colors } from "./colors";
import { fontWeights, fontSizes } from "./fonts";
import { sizes } from "./sizes";

export const theme = {
  colors,
  sizes,
  fontSizes,
  fontWeights,
};

export type ThemeProps = typeof theme;
