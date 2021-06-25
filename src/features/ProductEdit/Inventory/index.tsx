import { useState } from "react";

import styled from "styled-components";
import FormLabel from "components/FormLabel";
import CountInput from "components/CountInput";
import CheckBoxLabel from "components/CheckBoxLabel";

const InventoryContainer = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  & h6 {
    margin-bottom: 24px;
  }
  & .form-single {
    margin-bottom: 20px;
    span {
      margin-bottom: 10px;
    }
  }
`;

const DoubleInput = styled.div`
  display: flex;
  flex: 1;
`;

const CheckBoxContainer = styled.div`
  margin-bottom: 20px;
`;

const TripleInput = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  & .form-single {
    max-width: 160px;
    margin-bottom: 0px;
  }
`;

const styleProperty = {
  fontSize: "14px",
  Weight: "400",
  marginBottom: "6px",
  Color: "#828282",
};
const Inventroy = () => {
  const [skuValue, setSkuValue] = useState("");
  const [barCode, setbarCode] = useState("");
  const [quantity, setquantity] = useState("");
  const [sellMultiple, setsellMultiple] = useState("");
  const [maxorders, setmaxorders] = useState("");
  const OnSkuChange = (value) => {
    setSkuValue(value);
  };

  const OnBarCodeChange = (value) => {
    setbarCode(value);
  };

  const onQuantityChange = (value) => {
    setquantity(value);
  };
  const onSellMultipleChange = (value) => {
    setsellMultiple(value);
  };

  const onChangeMaxOrders = (value) => {
    setmaxorders(value);
  };

  const OnAllowBackOrder = (checked_h) => {};
  const onQuantityClick = (checked_h) => {};
  return (
    <InventoryContainer id="5">
      <h6>Inventory (All IELS ARE OPTIONAL)</h6>
      <DoubleInput>
        <div className="form-single">
          <div className="mb-1">
            <FormLabel styleproperty={styleProperty}>
              SKU(Stock keeping Unit)
            </FormLabel>
          </div>

          <CountInput
            val={skuValue}
            maxLength="10000"
            hide={true}
            placeholder=""
            onChange={OnSkuChange}
          ></CountInput>
        </div>
        <div className="form-single">
          <div className="mb-1">
            <FormLabel styleproperty={styleProperty}>
              Barcode (ISBN, UPC etc)
            </FormLabel>
          </div>
          <CountInput
            val={barCode}
            maxLength="10000"
            hide={true}
            placeholder=""
            onChange={OnBarCodeChange}
          ></CountInput>
        </div>
      </DoubleInput>
      <CheckBoxContainer>
        <CheckBoxLabel onClick={onQuantityClick}>Track quantity</CheckBoxLabel>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBoxLabel onClick={OnAllowBackOrder}>
          Allow backorders
        </CheckBoxLabel>
      </CheckBoxContainer>
      <TripleInput>
        <div className="form-single">
          <div className="mb-1">
            <FormLabel styleproperty={styleProperty}>Quantity</FormLabel>
          </div>

          <CountInput
            val={quantity}
            maxLength="10000"
            hide={true}
            placeholder=""
            onChange={onQuantityChange}
          ></CountInput>
        </div>
        <div className="form-single">
          <div className="mb-1">
            <FormLabel styleproperty={styleProperty}>
              Sell in multiples of
            </FormLabel>
          </div>
          <CountInput
            val={sellMultiple}
            maxLength="10000"
            hide={true}
            placeholder=""
            onChange={onSellMultipleChange}
          ></CountInput>
        </div>
        <div className="form-single">
          <div className="mb-1">
            <FormLabel styleproperty={styleProperty}>Max backorders</FormLabel>
          </div>
          <CountInput
            val={maxorders}
            maxLength="10000"
            hide={true}
            placeholder=""
            onChange={onChangeMaxOrders}
          ></CountInput>
        </div>
      </TripleInput>
    </InventoryContainer>
  );
};

export default Inventroy;
