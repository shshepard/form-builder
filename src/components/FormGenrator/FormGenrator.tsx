import React from "react";

import Form from "../Form";
import { FormComponentType, ComponentDefinition } from "../../types";

import { IFormGenrator } from "./types";

export const FormGenrator: React.FC<IFormGenrator> = (props) => {
  const { className, schema } = props;
  const { title, submitText, components } = schema;

  return (
    <Form className={className}>
      {title ? <Form.Title>{title}</Form.Title> : null}
      {components.map((el: ComponentDefinition, idx) => {
        const { id, label, component, hint, required } = el;
        const { type, params } = component || {};

        const controlType: FormComponentType =
          FormComponentType[type as keyof typeof FormComponentType];

        return (
          <Form.Row key={`${id}-${idx}`}>
            {label ? (
              <Form.Label required={required}>{label}</Form.Label>
            ) : null}
            <Form.Control
              name={id}
              type={controlType}
              hint={hint ? <Form.Hint>{hint}</Form.Hint> : null}
              props={params}
            />
          </Form.Row>
        );
      })}
      {submitText ? <Form.Submit>{submitText}</Form.Submit> : null}
    </Form>
  );
};

export default FormGenrator;
