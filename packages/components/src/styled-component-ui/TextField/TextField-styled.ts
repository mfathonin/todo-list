import styled from "styled-components";
import { PropsWithTheme } from "..";

type TextFieldProps = PropsWithTheme;

export const StyledTextField = styled.input<TextFieldProps>`
  outline: none;
  border: none;
  padding: 2px;
  border-bottom: 2px solid transparent;
  background-color: transparent;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.fg}57;
    font-size: ${({ theme }) => theme.typography.size.caption};
    font-style: italic;
  }
`;

export default StyledTextField;
