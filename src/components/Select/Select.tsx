import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { usePopperTooltip } from "react-popper-tooltip";

import { SelectComponentOption } from "../../types";

import { ISelect } from "./types";
import {
  InputStyles,
  InputHover,
  InputPlaceholder,
  InputFocus,
  InputTransitions,
} from "../styles";
import { InputTypography } from "../styles";

const tooltipStyles = {
  width: "200px",
  padding: 0,
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "4px",
  boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
  backgroundColor: "#fff",
};

const Select: React.FC<ISelect> = (props) => {
  const {
    className,
    options = [],
    onChange = Function.prototype,
    placeholder = "Select value...",
  } = props;

  const [visible, setVisible] = React.useState(false);

  const { getTooltipProps, setTooltipRef, setTriggerRef } = usePopperTooltip({
    trigger: "click",
    onVisibleChange: (state) => setVisible(state),
  });

  const [option, setOption] = React.useState<SelectComponentOption>();

  const clickHandler = (o: SelectComponentOption) => {
    setOption(o);
    setVisible(false);
    onChange(o);
  };

  const optionsList = (
    <>
      {options.map((o, i) => (
        <StyledOption
          key={`${o.key}-${i}`}
          selected={o.key === option?.key}
          onClick={() => clickHandler(o)}
        >
          {o.value}
        </StyledOption>
      ))}
    </>
  );

  const popup = (
    <div
      ref={setTooltipRef}
      {...getTooltipProps({
        style: tooltipStyles,
      })}
    >
      {options.length ? optionsList : <Placeholder>No options...</Placeholder>}
    </div>
  );

  return (
    <>
      <StyledSelect className={className} ref={setTriggerRef} focus={visible}>
        <StyledValue>
          {option ? option?.value : <Placeholder>{placeholder}</Placeholder>}
        </StyledValue>
        <StyledIcon icon={faChevronDown} size="sm" />
      </StyledSelect>
      {visible ? popup : null}
    </>
  );
};

const Placeholder = styled.div`
  ${InputPlaceholder}
  padding: 3px 5px;
`;

const StyledOption = styled.div<{ selected?: boolean }>`
  ${({ selected }) => selected && `background-color: #fd5;`}
  ${InputTransitions}
  ${InputTypography}
  padding: 5px 10px;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: #fff3b6;
  }
`;

const StyledValue = styled.div`
  flex-grow: 1;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.4);
`;

const StyledSelect = styled.div<{ focus?: boolean }>`
  ${InputTransitions}
  ${InputStyles}
  &:hover {
    ${InputHover}
  }
  ${({ focus }) => focus && `${InputFocus}`}
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 200px;
  width: 200px;
`;

export default Select;
