import React from "react";
import styled from "styled-components";
import { ICheckbox } from "./types";
import { InputTransitions, InputBorders, InputTypography } from "../styles";

const Checkbox: React.FC<ICheckbox> = (props) => {
  const { className = "", label = "", name } = props;

  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <StyledContainer className={className}>
      <CheckboxContainer>
        <HiddenCheckbox
          name={name}
          checked={checked}
          onChange={(e) => setChecked(e?.target?.checked)}
        />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
    </StyledContainer>
  );
};

const StyledContainer = styled.label`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.span`
  ${InputTypography}
  margin-left: 4px;
  cursor: pointer;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{
  checked?: boolean;
}>`
  ${InputTransitions}
  display: flex;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-color: ${({ checked }) => (checked ? "#fd5" : "#fff")};
  ${InputBorders}
  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export default Checkbox;
