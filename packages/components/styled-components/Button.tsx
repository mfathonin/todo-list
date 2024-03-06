import { PropsWithChildren } from "react";
import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary ?? "#a5d8ff"};
  padding: 12px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    text-decoration: dashed underline 1px
      ${(props) => props.theme.colors.primary ?? "#a5d8ff"};
  }
`;

// creating button with icon on left of text and when hovered, the icon will have a rounded border
type ButtonWithIconProps = PropsWithChildren & {
  onClick: () => void;
  icon?: React.ReactNode;
};
export const BaseButton: React.FC<ButtonWithIconProps> = ({
  children,
  icon,
  onClick,
}) => {
  return (
    <div>
      <Button onClick={onClick}>{children}</Button>
      <div className="left-icon">{icon}</div>
    </div>
  );
};
export const ButtonWithIcon = styled(BaseButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &.left-icon {
    display: flex;
    width: 44px;
    height: 44px;
    border-radius: 100%;
    border: 1px solid transparent;
    background-color: "red";
  }

  &:hover {
    .left-icon {
      border: 1px solid ${(props) => props.theme.colors.primary ?? "#a5d8ff"};
    }
  }
`;
