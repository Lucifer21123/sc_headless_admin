import { useState, useEffect } from "react";

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
} from "./index.style";

import FormLabel from "components/FormLabel";
import SearchInput from "components/SearchInput";

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

const ServiceSection = () => {
  const [state1, setstate1] = useState(data);
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
  const onSearchClick = () => {};

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
          >
            asddaf
          </SearchInput>
        </PageBoxSelect>
      </LinkToContainer>
    </ServiceSectionContainer>
  );
};

export default ServiceSection;
