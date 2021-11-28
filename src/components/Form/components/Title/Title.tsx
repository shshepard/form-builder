import React from "react";
import styled from "styled-components";
import { ITitle } from "./types";

const Title: React.FC<ITitle> = (props) => {
  const { className, children } = props;

  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export const StyledTitle = styled.h2``;

export default Title;
