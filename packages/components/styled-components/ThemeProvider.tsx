import { ThemeProvider } from "styled-components";
import { type PropsWithChildren } from "react";

export const themes = {
  colors: {
    primary: "#a5d8ff",
    secondary: "#40c057",
    error: "#ff8787",
    bg: "#fdf8f6",
    fg: "#605f5e",
  },
} as const;

export const ComponentsThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};
