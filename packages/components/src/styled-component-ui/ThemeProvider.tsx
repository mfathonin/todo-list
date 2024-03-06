import { ThemeProvider, createGlobalStyle } from "styled-components";
import React, { type PropsWithChildren } from "react";

import { themes } from "../commons/theme";

export type PropsWithTheme = {
  theme: typeof themes;
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.fg};
    padding: 0;
    margin: 0;
  }
`;

export const ComponentsThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
