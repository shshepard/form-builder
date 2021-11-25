import React from "react";
import styled from "styled-components";
import { IControl } from "./types";
import { FormComponentType } from "../../../../types";

import { Select, Checkbox, Input } from "../../../.";

const Control: React.FC<IControl> = (props) => {
  const { type, props: componentProps = {}, hint } = props;

  return (
    <StyledControl>
      {(() => {
        switch (type) {
          case FormComponentType.text:
            return <Input {...componentProps} />;
          case FormComponentType.select:
            return <Select {...componentProps} />;
          case FormComponentType.checkbox:
            return <Checkbox {...componentProps} />;

          default:
            return null;
        }
      })()}
      {hint}
    </StyledControl>
  );
};

export const StyledControl = styled.div``;

export default Control;
