import React from "react";
import styled from "styled-components";
import { IControl } from "./types";
import { FormComponentType } from "../../../../types";

import { Select, Checkbox, Input } from "../../../.";

const getConmponentType = (type: FormComponentType) => {
  switch (type) {
    case FormComponentType.text:
      return Input;
    case FormComponentType.select:
      return Select;
    case FormComponentType.checkbox:
      return Checkbox;

    default:
      return null;
  }
};

const Control: React.FC<IControl> = (props) => {
  const { type, props: componentProps = {}, hint, name } = props;

  const componentType = getConmponentType(type);

  if (!componentType) {
    return null;
  }

  const component = React.createElement(componentType, {
    ...componentProps,
    name,
  });

  return (
    <StyledControl>
      {component}
      {hint}
    </StyledControl>
  );
};

export const StyledControl = styled.div``;

export default Control;
