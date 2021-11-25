import React from "react";
import styled from "styled-components";
import { IRow } from "./types";

const Row: React.FC<IRow> = (props) => <StyledRow>{props.children}</StyledRow>;

export const StyledRow = styled.div``;

export default Row;
