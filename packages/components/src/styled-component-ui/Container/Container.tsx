import React, { type PropsWithChildren } from "react";
import { StyledContainer } from "./Container-styled";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
