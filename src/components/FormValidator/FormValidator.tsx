import React from "react";

import FormGenerator from "../FormGenrator";

import { validateSchema } from "../../utils";
import { SchemaValidity } from "../../types";

import { IFormValidator } from "./types";

export const FormValidator: React.FC<IFormValidator> = (props) => {
  const { className, schema } = props;

  const [validity, setValidity] = React.useState<SchemaValidity>(
    SchemaValidity.UNKNOWN
  );

  React.useEffect(() => {
    setValidity(SchemaValidity.UNKNOWN);

    validateSchema(schema)
      .then(() => setValidity(SchemaValidity.VALID))
      .catch(() => setValidity(SchemaValidity.INVALID));
  }, [schema]);

  const body = () => {
    switch (validity) {
      case SchemaValidity.VALID:
        return <FormGenerator schema={schema} />;
      case SchemaValidity.INVALID:
        return "Schema is not valid!";
      default:
        return "...";
    }
  };

  return <div className={className}>{body()}</div>;
};

export default FormValidator;
