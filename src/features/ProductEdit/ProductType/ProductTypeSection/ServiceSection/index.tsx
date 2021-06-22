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
} from "./index.style";

import FormLabel from "components/FormLabel";
import SearchInput from "components/SearchInput";
import SelectPageItem from "components/SelectPageItem";

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
    date: "252860580",
    image: "02.10.2020",
  },
  {
    id: 2,
    title: "Title here could be so much longer",
    date: "252860580",
    image: "02.10.2020",
  },
  {
    id: 3,
    title: "Title here could be so much longer",
    date: "252860580",
    image: "02.10.2020",
  },
  {
    id: 4,
    title: "Title here could be so much longer",
    date: "252860580",
    image: "02.10.2020",
  },
  {
    id: 5,
    title: "Title here could be so much longer",
    date: "252860580",
    image: "02.10.2020",
  },
];

const ServiceSection = () => {
  const [state1, setstate1] = useState(data);
  const [selectData, setSelectData] = useState(SelectItemData);
  const [searchHide, setSearchHide] = useState(true);
  useEffect(() => {
    console.log(state1);
  });

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
                  <li>
                    <SelectPageItem item={item} key={key}></SelectPageItem>
                  </li>
                );
              })}
            </SearchSelectUl>
          )}

          <FormLabel styleproperty={styleProperty}>
            When shoppers click on a product that is linked to a landing page,
            they will be taken to that page which details features of your
            service.You must create the page first.
          </FormLabel>
        </PageBoxSelect>
      </LinkToContainer>
    </ServiceSectionContainer>
  );
};

export default ServiceSection;
