import { useState } from "react";
import styled from "styled-components";
import checkIcon from "assets/icons/check.svg";
type CheckBoxContainerProps = {
  border: string;
  checked: boolean;
  activeBorder: string;
};
const CheckBoxContainer = styled.div<CheckBoxContainerProps>`
  width: 24px;
  height: 24px;
  border: 3px solid
    ${(props) => (props.checked ? props.activeBorder : props.border)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const CheckBox = ({ border, activeBorder, onClick }) => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBoxContainer
      border={border}
      checked={checked}
      activeBorder={activeBorder}
      onClick={() => {
        setChecked(!checked);
        onClick(checked);
      }}
    >
      {!checked ? <></> : <img src={checkIcon} />}
    </CheckBoxContainer>
  );
};

export default CheckBox;
