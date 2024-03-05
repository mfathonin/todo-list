import { ComponentsThemeProvider } from "components";
import { PropsWithChildren } from "react";

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ComponentsThemeProvider>{children}</ComponentsThemeProvider>;
};
