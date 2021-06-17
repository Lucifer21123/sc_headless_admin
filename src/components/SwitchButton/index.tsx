import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: relative;
`;
type CheckBoxLabelProps = {
  checkedColor: string;
  checkedBorderColor: string;
};
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 24px;
  border-radius: 15px;
  background: #315293;
  border: 1px solid #315293;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    border: 1px solid white;
    margin: 2px;
    margin-left: 27px;
    background: #f8f9fb;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
type CheckBoxProps = {
  unCheckedColor: string;
  unCheckedBorderColor: string;
};
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 48px;
  height: 24px;
  border: 1px solid #254277;
  &:checked + ${CheckBoxLabel} {
    background: #f8f9fb;
    &::after {
      content: "";
      border: 1px solid #315293;
      display: block;
      border-radius: 50%;
      width: 17px;
      height: 17px;
      margin-left: 2px;
      transition: 0.2s;
    }
  }
`;

const SwitchButton = ({ onChange }) => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <CheckBoxWrapper
        onChange={() => {
          onClick();
          onChange(checked);
        }}
      >
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

export default SwitchButton;
