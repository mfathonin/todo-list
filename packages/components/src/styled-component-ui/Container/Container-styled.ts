import styled from "styled-components";
import { PropsWithTheme } from "..";

export const StyledContainer = styled.div<PropsWithTheme>`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.sm};
  padding: 0 20px;
`;

export default StyledContainer;
