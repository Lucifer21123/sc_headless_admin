import { useState } from "react";

import {
  ProductTypeContainer,
  FormSingleSelect,
  ProductTypeSelectContainer,
  FormLabelContainer,
} from "./index.style";
import FormLabel from "components/FormLabel/index";
import Select from "components/Select";

//! import sections

import StandardSection from "./ProductTypeSection/standardSection";
import ServiceSection from "./ProductTypeSection/ServiceSection/index";

const styleProperty = {
  fontSize: "14px",
  Weight: "400",
  marginBottom: "6px",
  Color: "#828282",
};

const selectSetting = {
  fontSize: "16px",
  fontWeight: "normal",
  color: "#212529",
  headerColor: "#335491",
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

const productTypeData = [
  {
    id: 1,
    label: "A Standard",
  },
  {
    id: 2,
    label: "A service",
  },
  {
    id: 3,
    label: "A kit",
  },
  {
    id: 4,
    label: "A bundle",
  },
  {
    id: 5,
    label: "Has multiple options",
  },
];

const ProductType = () => {
  const [selectItem, setSelectItem] = useState({ id: 1, label: "A standard" });
  const onTypeSlect = (item) => {
    setSelectItem(item);
  };
  let productTyepeContent = <></>;
  switch (selectItem.id) {
    case 1:
      productTyepeContent = <StandardSection></StandardSection>;
      break;
    case 2:
      productTyepeContent = <ServiceSection></ServiceSection>;
      break;
    default:
      break;
  }
  return (
    <ProductTypeContainer id="3">
      <h6>Product type</h6>
      <FormSingleSelect>
        <FormLabelContainer>
          <FormLabel styleproperty={styleProperty}>Type</FormLabel>
        </FormLabelContainer>
        <ProductTypeSelectContainer>
          <Select
            settings={selectSetting}
            click={onTypeSlect}
            label="A Standard"
            list={productTypeData}
          ></Select>
        </ProductTypeSelectContainer>
      </FormSingleSelect>
      {productTyepeContent}
    </ProductTypeContainer>
  );
};

export default ProductType;
