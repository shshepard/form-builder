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

export interface CheckboxComponent extends AbsctractFormComponent {
  defaultValue: boolean;
}
export interface ComponentDefinition {
  id: string;
  label?: string;
  hint?: string;
  required?: boolean;
  component: {
    type: FormComponentType;
    params?: CheckboxComponent | TextComponent | SelectComponent;
  };
}

export type FormSchema = {
  title?: string;
  submitText?: string;
  components: ComponentDefinition[];
};

export enum SchemaValidity {
  VALID = "VALID",
  INVALID = "INVALID",
  UNKNOWN = "UNKNOWN",
}
