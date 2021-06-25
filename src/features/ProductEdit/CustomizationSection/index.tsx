import { useState } from "react";
import arrowTop from "assets/icons/arrow-shop.svg";
import * as Page from "./index.style";

//! import component
import ToggleTransition from "components/ToggleTransition";
import CountInput from "components/CountInput";
import FormLabel from "components/FormLabel";
import IconInput from "components/IconInput";
import CheckBoxLabel from "components/CheckBoxLabel";
import AddMetaField from "components/AddMetaField";
import AddFieldButton from "components/AddFieldButton";
import { HiKey } from "react-icons/hi";
const MetaData = [
  {
    id: 1,
    metaKey: "",
    metaValue: "",
  },
  {
    id: 2,
    metaKey: "",
    metaValue: "",
  },
  {
    id: 3,
    metaKey: "",
    metaValue: "",
  },
  {
    id: 4,
    metaKey: "",
    metaValue: "",
  },
];

const CustomizationSection = () => {
  const [show, setShow] = useState(true);
  const [metaFieldShow, setMetaFieldShow] = useState(true);
  const [MetaData_h, setMetaData] = useState(MetaData);

  const onCheckoutChange = (value) => {};
  const onCheckUrlChange = (value) => {};
  const onCustomTextPrice = (value) => {};
  const onInternalLinkChange = (value) => {};
  const onCanonocalLinkChange = (value) => {};
  const onSeoTitleChange = (value) => {};
  const onSeoTagsChange = (value) => {};
  const onMetafieldChecked = (checked) => {
    setMetaFieldShow(checked);
  };
  const OnMetaDataChange = (obj) => {
    let temp = [...MetaData_h];
    let st = temp.filter((item, key) => item.id == obj.id)[0];
    st.metaKey = obj.metaKey;
    st.metaValue = obj.metaValue;
    setMetaData(temp);
  };
  const onCloseMetaItem = (id) => {
    let temp = [...MetaData_h];
    if (temp.length == 1) {
      return;
    }
    let index = temp.findIndex((item, key) => item.id == id);
    temp.splice(index, 1);
    setMetaData(temp);
  };

  const onAddField = () => {
    let temp = [...MetaData_h];
    temp.push({ id: temp.length, metaKey: "", metaValue: "" });
    setMetaData(temp);
  };
  return (
    <Page.CustomizationSectionContainer id="11">
      <Page.CustomizationHeader
        onClick={() => {
          setShow(!show);
        }}
      >
        <h3>Customization</h3>
        <Page.ArrowContainer show={show}>
          <img src={arrowTop} alt="" />
        </Page.ArrowContainer>
      </Page.CustomizationHeader>

      <ToggleTransition hide={show} transitionTime="0.4s">
        <Page.GitShoppingBody>
          <h6>custom checkout links</h6>
          <Page.DoubleBox>
            <div className="form-single">
              <FormLabel>Checkout button text</FormLabel>
              <CountInput
                placeholder=""
                val=""
                maxLength={10}
                onChange={onCheckoutChange}
              ></CountInput>
              <span className="desc">
                By default, SplitChek use <b>Add to Cart</b> text, you can use
                this to change this text
              </span>
            </div>
            <div className="form-single">
              <FormLabel>Checkout URL</FormLabel>
              <CountInput
                placeholder=""
                val=""
                maxLength={10}
                onChange={onCheckUrlChange}
                hide={true}
              ></CountInput>
              <span className="desc">
                When shoppers click on Add to Cart they will be taken to this
                link yo proceed with their order. NB Sending shoppers to
                external site incurs a pay per click charge based on your
                category
              </span>
            </div>
          </Page.DoubleBox>
          <h6>custom price text</h6>
          <Page.DoubleBox>
            <div className="form-single">
              <CountInput
                placeholder=""
                val=""
                onChange={onCustomTextPrice}
                maxLength={100}
              ></CountInput>
              <span>
                Instead of using $0 or the actual price, use this to display
                custom prices e.g. From $5.90
              </span>
            </div>
          </Page.DoubleBox>
          <h6>custom product links</h6>
          <div className="form-single form__fluid">
            <FormLabel>Internal link</FormLabel>
            <IconInput
              paddingLeft={"90px"}
              placeholder="Custom link"
              value=""
              color="#48414d"
              onChange={onInternalLinkChange}
            >
              /splitcheck
            </IconInput>
            <p className="form-text">
              Internal links are not charged by SplitChek. When shoppers click
              on your product, they will be redirected to this link instead of
              our platform product view
            </p>
          </div>
          <div className="form-single form__fluid">
            <FormLabel>Canonocal link</FormLabel>
            <IconInput
              paddingLeft={"65px"}
              placeholder="Custom link"
              value=""
              color="#48414d"
              onChange={onCanonocalLinkChange}
            >
              https://
            </IconInput>
            <p className="form-text">
              Internal links are not charged by SplitChek. When shoppers click
              on your product, they will be redirected to this link instead of
              our platform product view
            </p>
          </div>
          <div className="form-single form__fluid">
            <FormLabel>SEO title</FormLabel>
            <CountInput
              maxLength={220}
              placeholder="product title"
              val=""
              onChange={onSeoTitleChange}
            ></CountInput>
            <p className="form-text">
              SEO title will be exposed to search engines including SplitChek’s
              search engine
            </p>
          </div>
          <div className="form-single form__fluid">
            <FormLabel>SEO Tag</FormLabel>
            <CountInput
              maxLength={220}
              placeholder=""
              val=""
              onChange={onSeoTagsChange}
              hide={true}
            ></CountInput>
            <p className="form-text">
              SEO tags will be exposed to search engines including SplitChek’s
              search engine
            </p>
          </div>
          <Page.CheckBox>
            <CheckBoxLabel onClick={onMetafieldChecked}>
              Use Meta fields
            </CheckBoxLabel>
            <ToggleTransition hide={metaFieldShow} transitionTime="0.4s">
              <div className="checkbox-body">
                <Page.CheckBoxList>
                  {MetaData_h.map((item, key) => {
                    return (
                      <AddMetaField
                        key={key}
                        item={item}
                        onChange={OnMetaDataChange}
                        onClose={onCloseMetaItem}
                      ></AddMetaField>
                    );
                  })}
                </Page.CheckBoxList>
                <AddFieldButton onClick={onAddField}></AddFieldButton>
              </div>
            </ToggleTransition>
          </Page.CheckBox>
        </Page.GitShoppingBody>
      </ToggleTransition>
    </Page.CustomizationSectionContainer>
  );
};
export default CustomizationSection;
