import React from "react";
import { FormComponentType } from "../../../../types";

export interface IControl {
  type: FormComponentType;
  hint?: React.ReactNode;
  props?: any;
  name: string;
}
