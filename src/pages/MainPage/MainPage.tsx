import React from "react";
import styled from "styled-components";

import {
  FormComponentType,
  SelectComponentOption,
  FormSchema,
} from "../../types";

import { IMainPage, SchemaValidity } from "./types";

import { Select, Form } from "../../components";

import { validateSchema } from "../../utils";

import schema1 from "../../mocks/example1.json";
import schema2 from "../../mocks/example2.json";
import schema3 from "../../mocks/example3.json";

const schemas: Record<string, any> = {
  "1": schema1,
  "2": schema2,
  "3": schema3,
};

const options: SelectComponentOption[] = Array.from(Object.keys(schemas)).map(
  (k) => ({
    key: k,
    value: `Schema ${k}`,
  })
);

const generateForm = (s: FormSchema) => (
  <Form>
    {s.map((el: any, idx) => {
      const { id, label, type, hint, required } = el;

      const controlType: FormComponentType =
        FormComponentType[type as keyof typeof FormComponentType];

      return (
        <Form.Row key={`${id}-${idx}`}>
          {label ? <Form.Label required={required}>{label}</Form.Label> : null}
          <Form.Control
            type={controlType}
            hint={hint ? <Form.Hint>{hint}</Form.Hint> : null}
          />
        </Form.Row>
      );
    })}
  </Form>
);

const MainPage: React.FC<IMainPage> = (props) => {
  const { className } = props;

  const [validity, setValidity] = React.useState<SchemaValidity>(
    SchemaValidity.UNKNOWN
  );

  const [schema, setSchema] = React.useState<FormSchema>();

  const body = () => {
    switch (validity) {
      case SchemaValidity.VALID:
        return generateForm(schema as FormSchema);
      case SchemaValidity.INVALID:
        return "Schema is not valid!";
      default:
        return "...";
    }
  };

  const onOptionChange = (o: SelectComponentOption) => {
    const schema: any = JSON.parse(JSON.stringify(schemas[o.key]));
    setSchema(schema);

    setValidity(SchemaValidity.UNKNOWN);

    validateSchema(schema)
      .then(() => setValidity(SchemaValidity.VALID))
      .catch((err) => setValidity(SchemaValidity.INVALID));
  };

  return (
    <Layout className={className}>
      <Header>
        <Title>Select schema</Title>
        <Select options={options} onChange={onOptionChange} />
      </Header>
      <Body>{body()}</Body>
    </Layout>
  );
};

const Title = styled.span`
  font-size: 18px;
  font-weight: true;
  margin-right: 8px;
`;

const Layout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MainPage;
