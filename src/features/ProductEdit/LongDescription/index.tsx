import { useState } from "react";
import { LongDescriptionContainer, CheckBoxContainer } from "./index.style";
import CheckBoxLabel from "components/CheckBoxLabel";
const LongDescription = () => {
  const onUseTabChecked = (checked) => {};
  return (
    <LongDescriptionContainer id="10">
      <h6>long description</h6>
      <CheckBoxContainer>
        <CheckBoxLabel onClick={onUseTabChecked}>
          Use tabs to separate content
        </CheckBoxLabel>
      </CheckBoxContainer>
      <p>
        Educate shoppers about this product. Explain how it can help them and
        why it is a better choice compared to other products.
      </p>
    </LongDescriptionContainer>
  );
};

export default LongDescription;
