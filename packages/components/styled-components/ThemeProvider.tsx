import { ThemeProvider } from "styled-components";
import { type PropsWithChildren } from "react";

export const themes = {
  colors: {
    primary: "#62a5f1",
    secondary: "#495654",
    error: "#e04f4f",
    bg: "#fffae8",
    fg: "#262626",
  },
} as const;

export const ComponentsThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};
