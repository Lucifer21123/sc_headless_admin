import styled from "styled-components";
import { useState } from "react";
import CheckBox from "components/CustomCheckBox";
const CheckBoxLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const LabelContainer = styled.div`
  display: flex;
`;

const CheckBoxLabel = ({ onClick, children }) => {
  const [checked_h, setchecked_h] = useState(false);
  return (
    <CheckBoxLabelContainer
      onClick={() => {
        setchecked_h(!checked_h);
        onClick(checked_h);
      }}
    >
      <CheckBox
        borderSize="2px"
        border="#f77d0e"
        activeBorder={"#f77d0e"}
        size={"18px"}
        onClick={onClick}
        checked={checked_h}
      ></CheckBox>
      <LabelContainer>{children}</LabelContainer>
    </CheckBoxLabelContainer>
  );
};
export default CheckBoxLabel;
