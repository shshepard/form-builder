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
  InputTypography,
} from "../styles";

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
    name,
  } = props;

  const selectRef = React.useRef<HTMLInputElement>(null);
  const [option, setOption] = React.useState<SelectComponentOption>();
  const [visible, setVisible] = React.useState<boolean>(false);

  const { getTooltipProps, setTooltipRef, setTriggerRef } = usePopperTooltip({
    trigger: "click",
    // closeOnOutsideClick: false,
  });

  const optionChangeHandler = (o: SelectComponentOption) => {
    setOption(o);
    onChange(o);
    setVisible(false);

    const input = selectRef.current;

    if (!input) {
      return;
    }

    // @ts-ignore
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value"
    ).set;

    if (!nativeInputValueSetter) {
      return;
    }

    nativeInputValueSetter.call(input, JSON.stringify(o));
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };

  const optionsList = (
    <>
      {options.map((o, i) => (
        <StyledOption
          key={`${o.key}-${i}`}
          selected={o.key === option?.key}
          onClick={() => optionChangeHandler(o)}
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
      <HiddenSelect name={name} ref={selectRef} />
      <StyledSelect
        className={className}
        ref={setTriggerRef}
        focus={visible}
        onClick={() => setVisible(!visible)}
      >
        <StyledValue>
          {option ? option?.value : <Placeholder>{placeholder}</Placeholder>}
        </StyledValue>
        <StyledIcon icon={faChevronDown} size="sm" />
      </StyledSelect>
      {visible ? popup : null}
    </>
  );
};

const HiddenSelect = styled.input`
  visibility: hidden;
  display: none;
`;

const Placeholder = styled.div`
  ${InputPlaceholder}
  padding: 3px 5px;
`;

const StyledOption = styled.div<{ selected?: boolean }>`
  ${InputTransitions}
  ${InputTypography}
  padding: 5px 10px;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: #fff3b6;
  }
  ${({ selected }) => selected && `background-color: #fd5;`}
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
