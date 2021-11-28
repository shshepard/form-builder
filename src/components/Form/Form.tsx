import React from "react";
import styled from "styled-components";
import { IForm } from "./types";

import Row, { StyledRow } from "./components/Row";
import Control, { StyledControl } from "./components/Control";
import Hint, { StyledHint } from "./components/Hint";
import Label, { StyledLabel } from "./components/Label";
import Title, { StyledTitle } from "./components/Title";
import Submit, { StyledSubmit } from "./components/Submit";

const Form: React.FC<IForm> = (props) => {
  const { className, children, initValues = {} } = props;

  const [formData, updateFormData] = React.useState(initValues);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FORM SUBMIT", formData);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      className={className}
    >
      {children}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 8px;
  }
  ${StyledTitle} {
    margin-bottom: 60px;
  }
  ${StyledSubmit} {
    width: 120px;
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
  Title,
  Submit,
});
