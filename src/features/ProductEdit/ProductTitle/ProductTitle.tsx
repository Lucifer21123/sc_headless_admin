//! import style

import { useState } from "react";
import {
  styleProperty,
  MaxText,
  SingleFormContainer,
  SeasonTitleBox,
  SeasonTitleBoxOther,
  MembersForm,
  SeanonTitleBoxContainer,
  SelectBefore,
  MemversTagForm,
} from "./ProductTitle.style";

//! import components
import FormLabel from "components/FormLabel/index";
import CountInput from "components/CountInput";
import CountTextArea from "components/CountTextarea";
import Select from "components/Select";
import dynamic from "next/dynamic";

const MultipleOptionSelect = dynamic(
  () =>
    import("components/MultipleOptionSelect/index").then(
      (module) => module.default
    ),
  {
    ssr: false,
  }
);

const selectSetting = {
  fontSize: "14px",
  fontWeight: "normal",
  color: "#212529",
  headerColor: "#212529",
  backgroundColor: "#f8f9fb",
  borderRadius: "8px",
  boxShadow: "1px 1px 4px 1px rgb(11 2 18 / 8%)",
  arrowTop: "50px",
  arrowRight: "-10px",
  itemFontSize: "16px",
  itemFontColor: "#212529",
  itemFontWeight: "normal",
  hoverBackgroundColor: "#f8f9fb",
  hoverColor: "#335491",
  borderColor: "#0b0212",
};

const linkedStores = [
  {
    id: "Select a store to manage",
    label: "Select a store to manage",
  },
  {
    id: "Select a store to manage",
    label: "Select a store to manage",
  },
  {
    id: "Select a store to manage",
    label: "Select a store to manage",
  },
];

const ProductTitle = ({ data, onTitleChange, onDescriptionChange }) => {
  const onSelect = (item) => {};

  return (
    <SeasonTitleBox>
      <SeanonTitleBoxContainer>
        <SingleFormContainer>
          <FormLabel styleproperty={styleProperty}>Title</FormLabel>
          <CountInput
            val={data.title}
            maxLength={120}
            placeholder="product title"
            onChange={onTitleChange}
          ></CountInput>
        </SingleFormContainer>
        <MaxText>
          <FormLabel styleproperty={styleProperty}>Short description</FormLabel>
          <CountTextArea
            placeholder={"Type here"}
            maxlength={255}
            val={data.description}
            onChange={onDescriptionChange}
          ></CountTextArea>
        </MaxText>
      </SeanonTitleBoxContainer>
      <SeasonTitleBoxOther>
        <p>
          Displayed on product page, Splitchek search and to other search
          engines
        </p>
        <h5>demographics</h5>
        <MembersForm>
          <FormLabel styleproperty={styleProperty}>Age bracket</FormLabel>
          <SelectBefore>
            <Select
              settings={selectSetting}
              click={onSelect}
              label="Terry Smith"
              list={linkedStores}
            ></Select>
          </SelectBefore>
        </MembersForm>
        <MemversTagForm>
          <FormLabel styleproperty={styleProperty}>Marketing tags</FormLabel>
          <MultipleOptionSelect></MultipleOptionSelect>
        </MemversTagForm>
      </SeasonTitleBoxOther>
    </SeasonTitleBox>
  );
};

export default ProductTitle;
