import React from "react";
import styled from "styled-components";
import {
  InputFocus,
  InputHover,
  InputStyles,
  InputTransitions,
} from "../styles";
import { IInput } from "./types";

const Input: React.FC<IInput> = (props) => {
  const { className } = props;
  return <StyledInput className={className} />;
};

const StyledInput = styled.input`
  ${InputStyles}
  ${InputTransitions}
  &:hover {
    ${InputHover}
  }
  &:focus {
    ${InputFocus}
  }
`;

export default Input;
