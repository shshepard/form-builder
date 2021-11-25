import { css } from "styled-components";

export const InputTypography = css`
  font-size: 14px;
  line-height: 18px;
  color: #4d4d4d;
`;

export const InputBorders = css`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const InputStyles = css`
  ${InputBorders}
  ${InputTypography}
  padding: 5px 10px;
  height: 40px;
  min-width: 40px;
  box-sizing: border-box;
`;

export const InputHover = css`
  color: rgba(0, 0, 0, 0.75);
  border-color: rgba(0, 0, 0, 0.3);
`;

export const InputFocus = css`
  border-color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.02);
  outline: none;
`;

export const InputPlaceholder = css`
  color: rgba(0, 0, 0, 0.25);
`;

export const InputTransitions = css`
  transition: all 300ms;
`;
