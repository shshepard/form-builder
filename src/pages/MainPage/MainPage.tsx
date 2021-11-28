import React from "react";
import styled from "styled-components";

import { SelectComponentOption, FormSchema } from "../../types";
import { Select } from "../../components";

import { IMainPage } from "./types";
import { schemas, options } from "./utils";
import FormValidator from "../../components/FormValidator";

const MainPage: React.FC<IMainPage> = (props) => {
  const { className } = props;

  const [schema, setSchema] = React.useState<FormSchema>();

  const onOptionChange = (o: SelectComponentOption) => {
    setSchema(schemas[o.key]);
  };

  return (
    <Layout className={className}>
      <Header>
        <Title>Select schema</Title>
        <Select options={options} onChange={onOptionChange} />
      </Header>
      <Body>{schema ? <FormValidator schema={schema} /> : null}</Body>
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
