import React from "react";
import styled from "styled-components";
import { IHint } from "./types";
import { InputTypography } from "../../../styles";

const Hint: React.FC<IHint> = (props) => {
  return <StyledHint>{props.children}</StyledHint>;
};

export const StyledHint = styled.div`
  ${InputTypography}
  font-size: 10px;
  color: rgba(0, 0, 0, 0.25);
`;

export default Hint;
