import styled from "styled-components";
import { PropsWithTheme } from "..";

type BaseButtonProps = PropsWithTheme;

export const StyledBaseButton = styled.button<BaseButtonProps>`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary ?? "#a5d8ff"};
  padding: 12px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    text-decoration: dashed underline 1px
      ${({ theme }) => theme.colors.primary ?? "#a5d8ff"};
  }
`;

export const StyledPrimaryButton = styled(StyledBaseButton)`
  background-color: ${({ theme }) => theme.colors.primary ?? "#a5d8ff"};
  color: ${({ theme }) => theme.colors.secondary ?? "#343a40"};
`;
