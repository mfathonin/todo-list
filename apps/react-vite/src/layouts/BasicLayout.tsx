import { Container } from "components";
import React, { PropsWithChildren } from "react";

const BasicLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BasicLayout;
