import React from "react";

export interface IForm {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  initValues?: Record<string, any>;
}
