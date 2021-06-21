import { useState } from "react";
import styled from "styled-components";

type CheckBoxContainerProps = {
  border: string;
};
const CheckBoxContainer = styled.div<CheckBoxContainerProps>`
  width: 24px;
  height: 24px;
  border: 3px solid ${(props) => props.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckBox = ({ border, checkimg, onClick }) => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBoxContainer
      border={border}
      onClick={() => {
        setChecked(!checked);
        onClick(checked);
      }}
    >
      {!checked ? <></> : <img src={checkimg} />}
    </CheckBoxContainer>
  );
};

export default CheckBox;
