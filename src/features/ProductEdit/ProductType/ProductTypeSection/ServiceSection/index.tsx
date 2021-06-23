import { useState, useEffect, useRef } from "react";

import AddFeature from "components/AddFeatuer";
import FeatureAddButton from "components/FeatureAddButton";

//! import icons
import Plus24 from "assets/icons/plus-24px.svg";

import {
  ServiceSectionContainer,
  ListFeatures,
  ListFeaturesBody,
  LinkToContainer,
  PageBoxSelect,
  SearchSelectUl,
  SelectLadingBoxContainer,
  SelectedUl,
  SelectedDescription,
  PaymentFreqContainer,
  PaymentCircleContainer,
  PaymentSelectContainer,
  DoublePrice,
  PageBoxDescription,
  PriceContainer,
  CheckedBoxContainer,
  TaxSelectCotainer,
} from "./index.style";

import FormLabel from "components/FormLabel";
import SearchInput from "components/SearchInput";
import SelectPageItem from "components/SelectPageItem";
import SelectedPageItem from "components/SelectPageItem/SelectedPageItem";
import Select from "components/Select";
import CountInput from "components/CountInput";
import IconInput from "components/IconInput";
import ToggleTransition from "components/ToggleTransition";
import CheckBoxLabel from "components/CheckBoxLabel";

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
    label: "Monthly",
  },
  {
    id: 2,
    label: "Monthly Two",
  },
];

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

const data = [
  {
    id: 1,
    title: "1",
    price: "12",
  },
  {
    id: 2,
    title: "2",
    price: "12",
  },
];

const styleProperty = {
  fontSize: "14px",
  Weight: "400",
  marginBottom: "6px",
  Color: "#828282",
};

const SelectItemData = [
  {
    id: 1,
    title: "Title here could be so much longer",
    no: "252860580",
    date: "02.10.2020",
    image: "",
    checked: false,
  },
  {
    id: 2,
    title: "Title here could be so much longer",
    no: "252860580",
    date: "02.10.2020",
    image: "",
    checked: false,
  },
  {
    id: 3,
    title: "Title here could be so much longer",
    no: "252860580",
    date: "02.10.2020",
    image: "",
    checked: false,
  },
  {
    id: 4,
    title: "Title here could be so much longer",
    no: "252860580",
    date: "02.10.2020",
    image: "",
    checked: false,
  },
  {
    id: 5,
    title: "Title here could be so much longer",
    date: "252860580",
    image: "02.10.2020",
    checked: false,
  },
];

const ServiceSection = () => {
  const [state1, setstate1] = useState(data);
  const [selectData, setSelectData] = useState(SelectItemData);
  const [searchHide, setSearchHide] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [chargeTax, setChargeTax] = useState(false);
  const [taxChecked, setTaxChecked] = useState(false);

  const onTaxSelect = (item) => {
    console.log(item);
  };

  const onFrequencyTextChange = (value) => {
    console.log(value);
  };

  const onPriceChange_Service = (value) => {
    console.log(value);
  };
  const onCompareAtChange_Service = (value) => {};
  const OnCheckedClick = (id, checked) => {
    let temp = [...selectedData];
    if (checked == true) {
      let st = [...selectData];
      st.filter((item, key) => item.id == id)[0].checked = true;
      temp.push(st.filter((item, key) => item.id == id)[0]);

      setSelectedData(temp);
    } else {
      let st = [...selectedData];
      let index = st.findIndex((item) => item.id == id);
      st.splice(index, 1);
      setSelectedData(st);

      st = [...selectData];
      st.filter((item, key) => item.id == id)[0].checked = false;
      setSelectData(st);
    }
  };

  const onCircleSelect = (item) => {
    console.log(item);
  };

  const OnDeleteClick = (id) => {
    console.log(id);
    let temp = [...selectedData];
    let index = temp.findIndex((item) => item.id == id);
    temp.splice(index, 1);
    setSelectedData(temp);

    temp = [...selectData];

    temp.filter((item, key) => item.id == id)[0].checked = false;
    setSelectData(temp);
    console.log(selectData);
  };

  const onTitleChange = (id, title) => {
    const temp = state1;
    temp.filter((item, key) => item.id == id)[0].title = title;
    setstate1(temp);
  };

  const onPriceChange = (id, price) => {
    const temp = state1;
    temp.filter((item, key) => item.id == id)[0].price = price;
    setstate1(temp);
  };

  const onClose = (id) => {
    const temp = [...state1];
    let index = temp.findIndex((item) => item.id == id);
    if (temp.length == 1) {
      return;
    }
    temp.splice(index, 1);
    setstate1(temp);
  };

  const AddButtonClick = () => {
    let temp = [...state1];
    let id = temp.length + 1;
    temp.push({ id: id, title: "", price: "" });
    setstate1(temp);
    //setstate1(temp);
  };

  const onSearchChange = () => {};
  const onSearchClick = () => {
    setSearchHide(!searchHide);
  };
  const dropMenuRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setSearchHide(false);
  };

  const onChargeClick = (checked) => {
    setChargeTax(checked);
  };

  const onTaxClick = (checked) => {
    setTaxChecked(checked);
  };

  useEffect(() => {
    if (searchHide) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchHide]);

  return (
    <ServiceSectionContainer>
      <p>
        A service is an intangible process. It has no physical dimentions and
        can’t be measured or weighed. These may include car service, cleaning,
        digital agencies and more.
      </p>
      <h6>FEATURES INCLUDED IN THIS SERVICE (OPTIONAL)</h6>
      <ListFeatures>
        <ListFeaturesBody>
          {state1.map((item, key) => {
            return (
              <AddFeature
                key={key}
                id={item.id}
                titleVal={item.title}
                priceVal={item.price}
                onClose={onClose}
                onPriceChange={onPriceChange}
                onTitleChange={onTitleChange}
              ></AddFeature>
            );
          })}
        </ListFeaturesBody>
        <FeatureAddButton onClick={AddButtonClick}>
          <span>
            <img src={Plus24}></img>
            Add features
          </span>
        </FeatureAddButton>
      </ListFeatures>
      <LinkToContainer>
        <h6>Link TO A Landing PAGE</h6>
        <PageBoxSelect>
          <FormLabel styleproperty={styleProperty}>Select page</FormLabel>
          <SearchInput
            onChange={onSearchChange}
            onClick={onSearchClick}
            containerHeight="auto"
            None={false}
          >
            sds
          </SearchInput>
          {searchHide ? (
            <></>
          ) : (
            <SearchSelectUl searchHide={searchHide} ref={dropMenuRef}>
              {selectData.map((item, key) => {
                return (
                  <li key={key}>
                    <SelectPageItem
                      onClick={OnCheckedClick}
                      item={item}
                      checked={item.checked}
                    ></SelectPageItem>
                  </li>
                );
              })}
            </SearchSelectUl>
          )}
          <SelectedDescription>
            <FormLabel styleproperty={styleProperty}>
              When shoppers click on a product that is linked to a landing page,
              they will be taken to that page which details features of your
              service.You must create the page first.
            </FormLabel>
          </SelectedDescription>

          <SelectLadingBoxContainer>
            <SelectedUl>
              {selectedData.map((item, key) => {
                return (
                  <li key={key}>
                    <SelectedPageItem
                      item={item}
                      onClick={OnDeleteClick}
                    ></SelectedPageItem>
                  </li>
                );
              })}
            </SelectedUl>
          </SelectLadingBoxContainer>
        </PageBoxSelect>
      </LinkToContainer>
      <PaymentFreqContainer>
        <h6>payment frequency</h6>
        <PaymentCircleContainer>
          <PaymentSelectContainer>
            <Select
              settings={selectSetting}
              click={onCircleSelect}
              label="A Standard"
              list={productTypeData}
            ></Select>
          </PaymentSelectContainer>

          <p>
            Select payment circle for your service. Payment circle starts from
            the day after order fulfilment
          </p>
          <div className="form-single ">
            <FormLabel styleproperty={styleProperty}>
              Frequency text(optional)
            </FormLabel>
            <CountInput
              val=""
              maxLength={15}
              placeholder={"Month/user"}
              onChange={onFrequencyTextChange}
            ></CountInput>
          </div>
          <DoublePrice>
            <div className="form-single">
              <FormLabel styleproperty={styleProperty}>Price</FormLabel>
              <IconInput
                placeholder=""
                value=""
                onChange={onPriceChange_Service}
              >
                $
              </IconInput>
              <p>
                Price for selling your item. If we discount your item, we will
                pay you the difference between the unit price and the list
                price. Compare at
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
                Price must be more than the list price. Good for showing
                discount difference. If it is less than the list price, it will
                be ignored.
              </p>
            </div>
          </DoublePrice>
        </PaymentCircleContainer>
      </PaymentFreqContainer>
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
    </ServiceSectionContainer>
  );
};

export default ServiceSection;
