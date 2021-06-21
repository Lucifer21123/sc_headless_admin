import { useState } from "react";
import styled from "styled-components";
import CountInput from "components/CountInput";
import FormLabel from "components/FormLabel";

import CloseIcon from "assets/icons/close-24px.svg";

export const AddFeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin-right: 30px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  margin-right: 30px;
`;

export const ListFeatureClose = styled.a`
  padding-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const styleProperty = {
  fontSize: "14px",
  Weight: "400",
  marginBottom: "6px",
  Color: "#828282",
};
const AddFeature = ({
  id,
  titleVal = "",
  priceVal = "",
  onClose,
  onTitleChange,
  onPriceChange,
}) => {
  const onTitleChange_h = (e) => {
    onTitleChange(id, e);
  };

  const onPriceChange_h = (event) => {
    onPriceChange(id, event);
  };
  return (
    <AddFeatureContainer>
      <TitleContainer>
        <FormLabel styleproperty={styleProperty}>Title</FormLabel>
        <CountInput
          val={titleVal}
          placeholder="title"
          onChange={(event) => {
            onTitleChange_h(event);
          }}
          maxLength={500}
          hide={true}
        ></CountInput>
      </TitleContainer>
      <PriceContainer>
        <FormLabel styleproperty={styleProperty}>Price(optional)</FormLabel>
        <CountInput
          val={priceVal}
          placeholder="price"
          onChange={(event) => {
            onPriceChange_h(event);
          }}
          maxLength={500}
          hide={true}
        ></CountInput>
      </PriceContainer>
      <ListFeatureClose
        onClick={() => {
          onClose(id);
        }}
      >
        <img src={CloseIcon}></img>
      </ListFeatureClose>
    </AddFeatureContainer>
  );
};

export default AddFeature;
