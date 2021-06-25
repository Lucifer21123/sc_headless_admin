import styled from "styled-components";
import { useState } from "react";

import FormLabel from "components/FormLabel";
import IconInput from "components/IconInput";
import CheckBoxLabel from "components/CheckBoxLabel";
import Select from "components/Select";
import ToggleTransition from "components/ToggleTransition";

const PricingContainer = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  background-color: white;
  display: flex;
  flex-direction: column;

  & h6 {
    color: #335491;
    font-weight: 500;
    font-size: 12px;
    font-style: normal;
    letter-spacing: 0.8px;
    line-height: 12px;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 24px;
  }
`;

const CheckedBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const styleProperty = {
  fontSize: "14px",
  Weight: "400",
  marginBottom: "6px",
  Color: "#828282",
};

const DoublePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .form-single {
    margin-bottom: 32px;
    & p {
      width: 100%;
      opacity: 0.75;
      color: #0b0212;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
      display: inline-block;
      margin-top: 8px;
      margin-bottom: 0px;
    }
  }
`;
const TaxSelectCotainer = styled.div`
  display: block;
  max-width: 240px;
  min-height: 38px;
  margin-bottom: 15px;
  z-index: 1123123 !important;
`;
const selectSetting = {
  fontSize: "16px",
  fontWeight: "normal",
  color: "#212529",
  headerColor: "#0b0212",
  backgroundColor: "#f8f9fb",
  borderRadius: "8px",
  boxShadow: "1px 1px 4px 1px rgb(11 2 18 / 8%)",
  arrowTop: "50px",
  arrowRight: "-10px",
  itemFontSize: "16px",
  itemFontColor: "#0b0212",
  itemFontWeight: "normal",
  hoverBackgroundColor: "#f8f9fb",
  hoverColor: "#335491",
  borderColor: "#0b0212",
};
const TaxSelectData = [
  {
    id: 1,
    label: "10% VAT",
  },
  {
    id: 2,
    label: "No vat/GST",
  },
  {
    id: 3,
    label: "15% VAT",
  },
];

const Pricing = () => {
  const [chargeTax, setChargeTax] = useState(false);
  const [taxChecked, setTaxChecked] = useState(false);
  const onPriceChange_Service = (value) => {};
  const onCompareAtChange_Service = (value) => {};
  const onChargeClick = (checked) => {
    setChargeTax(checked);
  };

  const onTaxClick = (checked) => {
    setTaxChecked(checked);
  };
  const onTaxSelect = (item) => {
    console.log(item);
  };
  return (
    <PricingContainer id="4">
      <h6>Pricing</h6>
      <DoublePrice>
        <div className="form-single">
          <FormLabel styleproperty={styleProperty}>Price</FormLabel>
          <IconInput placeholder="" value="" onChange={onPriceChange_Service}>
            $
          </IconInput>
          <p>
            Price for selling your item. If we discount your item, we will pay
            you the difference between the unit price and the list price.
            Compare at
          </p>
        </div>

        <div className="form-single ">
          <FormLabel styleproperty={styleProperty}>Compare at</FormLabel>
          <IconInput
            placeholder=""
            value=""
            onChange={onCompareAtChange_Service}
          >
            $
          </IconInput>
          <p>
            Price must be more than the list price. Good for showing discount
            difference. If it is less than the list price, it will be ignored.
          </p>
        </div>
      </DoublePrice>
      <CheckedBoxContainer>
        <CheckBoxLabel onClick={onChargeClick}>
          Charge tax on this product
        </CheckBoxLabel>
        <ToggleTransition hide={chargeTax} transitionTime="0.5s">
          <TaxSelectCotainer>
            <Select
              settings={selectSetting}
              click={onTaxSelect}
              label="A Standard"
              list={TaxSelectData}
            ></Select>
          </TaxSelectCotainer>
        </ToggleTransition>
        <CheckBoxLabel onClick={onTaxClick}>
          Tax included in the price
        </CheckBoxLabel>
      </CheckedBoxContainer>
    </PricingContainer>
  );
};

export default Pricing;
