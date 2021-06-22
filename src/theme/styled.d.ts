import {} from "styled-components/native";
import { ThemeProps } from "./index";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeProps {}
}
