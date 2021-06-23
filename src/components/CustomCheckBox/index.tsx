import { useState } from "react";
import styled from "styled-components";
import checkIcon from "assets/icons/check.svg";
type CheckBoxContainerProps = {
  border: string;
  checked: boolean;
  activeBorder: string;
  size: string;
  borderSize: string;
};
const CheckBoxContainer = styled.div<CheckBoxContainerProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.borderSize} solid
    ${(props) => (props.checked ? props.activeBorder : props.border)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 8px;
`;

const CheckBox = ({
  borderSize = "3px",
  border,
  activeBorder,
  onClick,
  checked,
  size = "24px",
}) => {
  return (
    <CheckBoxContainer
      border={border}
      size={size}
      checked={checked}
      activeBorder={activeBorder}
      borderSize={borderSize}
      onClick={() => {
        onClick(!checked);
      }}
    >
      {!checked ? <></> : <img src={checkIcon} />}
    </CheckBoxContainer>
  );
};

export default CheckBox;
