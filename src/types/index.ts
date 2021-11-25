export enum FormComponentType {
  text = "text",
  select = "select",
  checkbox = "checkbox",
}

export interface AbsctractFormComponent {
  type: FormComponentType;
  defaultValue?: any;
}

export type SelectComponentOption = {
  key: string | number;
  value: string;
};

export interface SelectComponent extends AbsctractFormComponent {
  options: SelectComponentOption[];
  defaultValue?: SelectComponentOption["key"];
}

export interface TextComponent extends AbsctractFormComponent {
  defaultValue: string;
}

export type CheckboxGroupComponentOption = {
  key: string | number;
  value: boolean;
  label: string;
};

export interface CheckboxComponent extends AbsctractFormComponent {
  defaultValue: boolean;
}

export interface AbstractFormElement {
  id: string;
  label?: string;
  type: FormComponentType;
  hint?: string;
  required?: boolean;
}

export type FormSchema = AbstractFormElement[];
