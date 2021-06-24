import { useState } from "react";
import { MaxText, TermsBoxContainer } from "./index.style";
import FormLabel from "components/FormLabel";
import CountTextArea from "components/CountTextarea";
const TermSection = () => {
  const onTextAreaChange = (val) => {
    console.log(val);
  };
  return (
    <TermsBoxContainer>
      <h6>Terms and conditions (optional)</h6>
      <MaxText>
        <FormLabel>Guarantee text</FormLabel>
        <CountTextArea
          placeholder=""
          maxlength={255}
          val=""
          onChange={onTextAreaChange}
        ></CountTextArea>
      </MaxText>
    </TermsBoxContainer>
  );
};

export default TermSection;
