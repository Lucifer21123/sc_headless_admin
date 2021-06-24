import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
type CheckBoxLabelProps = {
  checked: boolean;
};
const CheckBoxLabel = styled.div<CheckBoxLabelProps>`
  & .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
    outline: none;
    & .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 48px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid #315293;
      background-color: #315293;
      transition: 0.4s;

      ::before {
        position: absolute;
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        top: 2px;
        right: 3px;
        border: 1px solid ${(props) => (props.checked ? "#315293" : "#828282")};
        background-color: #fff;
        transition: 0.4s;
      }
    }
    & input {
      position: absolute;
      z-index: -1;
    }
    & input:checked + .slider {
      background-color: #f8f8f8;
    }
    & input:focus + .slider {
    }
    & input:checked + .slider:before {
      transform: translateX(-22px);
    }
  }
`;

const SwitchButton = ({ checked = true, onChange }) => {
  return (
    <CheckBoxLabel checked={checked}>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            onChange(!checked);
          }}
        />
        <div className="slider"></div>
      </label>
    </CheckBoxLabel>
  );
};

export default SwitchButton;
