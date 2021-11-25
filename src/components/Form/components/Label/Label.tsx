import React from "react";
import styled from "styled-components";
import { ILabel } from "./types";
import { InputTypography } from "../../../styles";

const Label: React.FC<ILabel> = (props) => {
  const { children, required } = props;
  return (
    <StyledLabel>
      <span>{children}</span>
      {required ? <Required>*</Required> : null}
    </StyledLabel>
  );
};

const Required = styled.span``;

export const StyledLabel = styled.span`
  ${InputTypography}
`;

export default Label;
