import {
  AdditionBox,
  SingleCheck,
  DoubleInput,
  SingleCheckBody,
  CheckLabelContainer,
  CheckedChildrenBody,
  DoubleInputSelect,
  DoublePriceContainer,
} from "./index.style";
import { useState } from "react";

//!import switchButton

import SwitchButton from "components/SwitchButton";
import ToggleTransition from "components/ToggleTransition";
import FormLabel from "components/FormLabel";
import CountInput from "components/CountInput";
import CheckBoxLabel from "components/CheckBoxLabel";
import SelectInput from "components/SelectInput";

const Permission = () => {
  const [preOrderEnabled, setpreOrderEnabled] = useState(true);
  const [shippingEngabled, setShippingEnabled] = useState(true);
  const [classified, setClassified] = useState(true);
  const [propertyChecked, setPropertyChecked] = useState(true);
  const [bargainEnabled, setBargainEnabled] = useState(false);

  let bargain = bargainEnabled ? "enabled" : "disabled";
  let order = preOrderEnabled ? "enabled" : "disabled";
  let shipping = shippingEngabled ? "enabled" : "disabled";

  const onPreOrderChange = (checked) => {
    setpreOrderEnabled(checked);
  };

  const onShippingChange = (checked) => {
    setShippingEnabled(checked);
  };

  const onShipFromChange = (val) => {};

  const onEstimateChange = (val) => {};

  const onClickHeavyItem = (checked) => {};

  const onClickClassfied = (checked) => {
    setClassified(checked);
  };
  const onWeightInputChange = (value) => {};

  const onWeightSelectChange = (item) => {};

  const onCubictInputChange = (value) => {};

  const onCubictSelectChange = (item) => {};

  const onCheckedWidth = (checked) => {
    setPropertyChecked(checked);
  };

  const onWidthChange = (value) => {};
  const onWidthSelect = (item) => {};

  const onLengthChange = (value) => {};
  const onLengthSelect = (item) => {};

  const onHeightChange = (value) => {};
  const onHeightSelect = (item) => {};

  const onBargainChange = (checked) => {
    setBargainEnabled(checked);
  };

  const onMaxBargainChange = (value) => {};
  const onMaxBargainOrder = (value) => {};

  const onProductChange = (value) => {};

  const onPriceRulesChecked = (checked) => {};
  const onFreeShippingChecked = (checked) => {};

  return (
    <AdditionBox>
      <h6>additional permissions</h6>
      <SingleCheck>
        <span>
          Pre-orders <b>{order}</b>
        </span>
        <SwitchButton
          checked={preOrderEnabled}
          onChange={onPreOrderChange}
        ></SwitchButton>
      </SingleCheck>
      <SingleCheck>
        <span>
          Shipping <b>{shipping}</b>
        </span>
        <SwitchButton
          checked={shippingEngabled}
          onChange={onShippingChange}
        ></SwitchButton>
      </SingleCheck>
      <ToggleTransition hide={shippingEngabled} transitionTime={"0.4s"}>
        <SingleCheckBody>
          <DoubleInput>
            <div className="form-single">
              <FormLabel>Ships from</FormLabel>
              <CountInput
                val=""
                maxLength="7"
                placeholder=""
                hide={true}
                onChange={onShipFromChange}
              ></CountInput>
            </div>
            <div className="form-single">
              <FormLabel>Estimated delivery</FormLabel>
              <CountInput
                val=""
                maxLength="7"
                placeholder=""
                hide={true}
                onChange={onEstimateChange}
              ></CountInput>
            </div>
          </DoubleInput>
          <CheckLabelContainer>
            <CheckBoxLabel onClick={onClickHeavyItem}>
              This is heavy item
            </CheckBoxLabel>
          </CheckLabelContainer>
          <CheckLabelContainer>
            <CheckBoxLabel onClick={onClickClassfied}>
              This item is classified as a dangerous good.
            </CheckBoxLabel>
          </CheckLabelContainer>
          <ToggleTransition hide={classified} transitionTime="0.4s">
            <CheckedChildrenBody>
              <p className="check">
                Dangerous goods that are dangerous, flammable, explosive,
                volatitle, offensive or are of a damaging nature
              </p>
              <DoubleInputSelect>
                <div className="form-single">
                  <FormLabel>Weight</FormLabel>
                  <SelectInput
                    val=""
                    maxLength="7"
                    placeholder=""
                    label="kg"
                    onInputChange={onWeightInputChange}
                    onSelect={onWeightSelectChange}
                    options={[
                      { id: 1, label: "kg" },
                      { id: 2, label: "kg" },
                    ]}
                  ></SelectInput>
                </div>
                <span className="or">or</span>
                <div className="form-single">
                  <FormLabel>Cubic</FormLabel>
                  <SelectInput
                    val=""
                    maxLength="7"
                    placeholder=""
                    label="kg"
                    onInputChange={onCubictInputChange}
                    onSelect={onCubictSelectChange}
                    options={[
                      { id: 1, label: "kg" },
                      { id: 2, label: "kg" },
                    ]}
                  ></SelectInput>
                </div>
              </DoubleInputSelect>
              <p>
                Either Weight or Cubic is required not both. If you use weight,
                Cubic is not required or vice verca
              </p>
            </CheckedChildrenBody>
          </ToggleTransition>
          <CheckLabelContainer>
            <CheckBoxLabel onClick={onCheckedWidth}>
              I want to add width, length and height manually
            </CheckBoxLabel>
            <ToggleTransition hide={propertyChecked} transitionTime="0.4s">
              <CheckedChildrenBody>
                <DoubleInputSelect>
                  <div className="form-single">
                    <FormLabel>Width</FormLabel>
                    <SelectInput
                      val=""
                      maxLength="7"
                      placeholder=""
                      label="cm"
                      onInputChange={onWidthChange}
                      onSelect={onWidthSelect}
                      options={[
                        { id: 1, label: "cm" },
                        { id: 2, label: "cm" },
                      ]}
                    ></SelectInput>
                  </div>
                  <div className="form-single">
                    <FormLabel>Length</FormLabel>
                    <SelectInput
                      val=""
                      maxLength="7"
                      placeholder=""
                      label="cm"
                      onInputChange={onLengthChange}
                      onSelect={onLengthSelect}
                      options={[
                        { id: 1, label: "cm" },
                        { id: 2, label: "cm" },
                      ]}
                    ></SelectInput>
                  </div>
                  <div className="form-single">
                    <FormLabel>Height</FormLabel>
                    <SelectInput
                      val=""
                      maxLength="7"
                      placeholder=""
                      label="cm"
                      onInputChange={onHeightChange}
                      onSelect={onHeightSelect}
                      options={[
                        { id: 1, label: "cm" },
                        { id: 2, label: "cm" },
                      ]}
                    ></SelectInput>
                  </div>
                </DoubleInputSelect>
              </CheckedChildrenBody>
            </ToggleTransition>
          </CheckLabelContainer>
        </SingleCheckBody>
      </ToggleTransition>
      <SingleCheck>
        <span>
          Enable to be in the bargain page <b>{bargain}</b>
        </span>
        <SwitchButton
          checked={bargainEnabled}
          onChange={onBargainChange}
        ></SwitchButton>
      </SingleCheck>
      <span className="warn-more">More about SplitChek bargains</span>
      <SingleCheckBody>
        <DoublePriceContainer>
          <div className="form-single">
            <FormLabel>max % bargain discount</FormLabel>
            <CountInput
              val=""
              maxLength={12123}
              placeholder=""
              onChange={onMaxBargainChange}
              hide={true}
            ></CountInput>
            <span className="desc">
              Max discount that shoud be applied your item on the bargain page.
              Min 15%
            </span>
          </div>
          <div className="form-single">
            <FormLabel>max % bargain order</FormLabel>
            <CountInput
              val=""
              maxLength={12123}
              placeholder=""
              onChange={onMaxBargainOrder}
              hide={true}
            ></CountInput>
            <span className="desc">
              Item will be disabled from the bargain when max orders has been
              reached
            </span>
          </div>
        </DoublePriceContainer>
      </SingleCheckBody>
      <div className="form-single max-bottom">
        <FormLabel>Notes to shoppers</FormLabel>
        <CountInput
          placeholder="product title"
          val=""
          onChange={onProductChange}
          maxLength={180}
        ></CountInput>
      </div>
      <p>
        Notes to display to shoppers on the bargain page. For example, notify
        them if this is weekly, monthly, yearly subscriptions on base pricing
        model or if they can pickup from your store
      </p>
      <CheckLabelContainer>
        <CheckBoxLabel onClick={onPriceRulesChecked}>
          Disable price rulse forthis product when bargain used
        </CheckBoxLabel>
      </CheckLabelContainer>
      <CheckLabelContainer>
        <CheckBoxLabel onClick={onFreeShippingChecked}>
          Enable free shiping on this item when bargain is active
        </CheckBoxLabel>
      </CheckLabelContainer>
    </AdditionBox>
  );
};

export default Permission;
