import React from "react";
import Button, { IButton, StyledButton } from "../../../Button";

const Submit: React.FC<IButton> = (props) =>
  React.createElement(Button, { ...props, type: "submit" });

export const StyledSubmit = StyledButton;

export default Submit;
