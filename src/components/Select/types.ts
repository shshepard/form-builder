import { SelectComponentOption } from "../../types";

export interface ISelect {
  className?: string;
  options?: SelectComponentOption[];
  defaultValue?: SelectComponentOption;
  placeholder?: string;
  onChange?: (v: SelectComponentOption) => void;
}
