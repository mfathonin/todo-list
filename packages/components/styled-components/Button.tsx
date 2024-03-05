import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.fg ?? "black"};
  padding: 12px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary ?? "#62a5f1"};
  }
`;
