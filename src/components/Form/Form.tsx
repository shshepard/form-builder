import React from "react";
import styled from "styled-components";
import { IForm } from "./types";

import Row, { StyledRow } from "./components/Row";
import Control, { StyledControl } from "./components/Control";
import Hint, { StyledHint } from "./components/Hint";
import Label, { StyledLabel } from "./components/Label";

const Form: React.FC<IForm> = (props) => {
  const { className, children } = props;
  return <StyledForm className={className}>{children}</StyledForm>;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 8px;
  }
  ${StyledRow} {
    display: flex;
    flex-direction: row;
    ${StyledLabel} {
      width: 100px;
      height: 40px;
    }
  }
  ${StyledControl} {
    disply: flex;
    flex-direction: column;
    ${StyledHint} {
    }
  }
`;

export default Object.assign(Form, {
  Row,
  Control,
  Hint,
  Label,
});
