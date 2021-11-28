import React from "react";
import styled from "styled-components";
import { IButton } from "./types";
import { InputStyles, InputTransitions } from "../styles";

const Button: React.FC<IButton> = (props) => {
  const { className, children, type } = props;
  return (
    <StyledButton className={className} type={type}>
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  ${InputStyles}
  ${InputTransitions}
  min-width: 120px;
  background-color: #fd5;
  cursor: pointer;
  &:hover {
    background-color: #fff3b6;
  }
  &:active {
    background-color: #e6be1b;
  }
`;

export default Button;
