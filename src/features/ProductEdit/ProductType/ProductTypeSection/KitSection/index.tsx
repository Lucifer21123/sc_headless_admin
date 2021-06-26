import {
  KitBoxSection,
  CheckboxContainer,
  SearchInputContainer,
  SearchContent,
  AssociatedBox,
  AssociatedBoxItem,
} from "./index.style";

import { useState, useEffect } from "react";

import CheckBoxLabel from "components/CheckBoxLabel";
import FormLabel from "components/FormLabel";
import CountInput from "components/CountInput";
import SearchInput from "components/SearchInput";
import KitProduct from "components/KitProduct";
import KitListItems from "components/KitListItems";

const searchData = [
  {
    id: 1,
    title: "Title here could be so much longer.",
    sku: "#134567",
    qty: 999,
    price: 49.99,
  },
  {
    id: 2,
    title: "Title here could be so much longer.",
    sku: "#134567",
    qty: 999,
    price: 49.99,
  },
  {
    id: 3,
    title: "Title here could be so much longer.",
    sku: "#134567",
    qty: 999,
    price: 49.99,
  },
  {
    id: 4,
    title: "Title here could be so much longer.",
    sku: "#134567",
    qty: 999,
    price: 49.99,
  },
  {
    id: 5,
    title: "Title here could be so much longer.",
    sku: "#134567",
    qty: 999,
    price: 49.99,
  },
];

const kitItemData = [];
let content;
const KitSection = () => {
  const [searchData_h, setsearchData] = useState(searchData);
  const [kitItemsData_h, setkitItemsData] = useState(kitItemData);
  const [state, setstate] = useState(false);
  const onAllowShopper = (checked) => {};
  const onPriceChange = (value) => {};
  const OnSeach = (value) => {};
  const onClick = () => {};
  const onKitProductItemChecked = (id, checked) => {
    console.log(id);
    console.log(checked);
    if (!checked) {
      let temp = [...searchData_h];
      let st = temp.filter((item, key) => item.id == id)[0];
      let temp_kit = [...kitItemsData_h];
      let t = {
        id: st.id,
        title: st.title,
        sku: st.sku,
        price: st.sku,
        count: 0,
      };
      temp_kit.push(t);
      if (temp_kit.length == 4) {
        setsearchData([]);
        setstate(true);
      }
      setkitItemsData(temp_kit);
    }
  };
  const onKitQuantityChagne = (id, value) => {};
  const onKitDeleteClick = (id) => {};

  useEffect(() => {
    console.log(true);
    if (state == true) {
      console.log("adadf");
      content = <></>;
    }
  }, [state]);

  return (
    <KitBoxSection>
      <p>
        A Kit is just a list of standard items that can be used to populate
        shopper's cart. Standard price policy applies to kit's items. When
        shoppers choose to buy individual items, the item price will be applied.
      </p>
      <h6>KIT</h6>
      <CheckboxContainer>
        <CheckBoxLabel onClick={onAllowShopper}>
          Allow shoppers to edit quantity
        </CheckBoxLabel>
      </CheckboxContainer>
      <div className="form-single">
        <div className="mb-1">
          <FormLabel>Overwrite shipping cost(optional)</FormLabel>
          <CountInput
            val=""
            maxLength={1200}
            placeholder="Enter shipping price"
            hide={true}
            onChange={onPriceChange}
          ></CountInput>
        </div>
      </div>
      <SearchInputContainer>
        <SearchInput
          onChange={OnSeach}
          onClick={onClick}
          containerHeight="auto"
        >
          <SearchContent>
            {searchData_h.length == 0 ? (
              <>no data</>
            ) : (
              searchData_h.map((item, key) => {
                return (
                  <li key={key}>
                    <KitProduct
                      item={item}
                      onChecked={onKitProductItemChecked}
                    ></KitProduct>
                  </li>
                );
              })
            )}
          </SearchContent>
        </SearchInput>
      </SearchInputContainer>
      <AssociatedBox>
        <span>KIT LIST</span>
        {kitItemsData_h.map((item, key) => {
          return (
            <AssociatedBoxItem key={key}>
              <KitListItems
                key={key}
                item={item}
                onChange={onKitQuantityChagne}
                onDelete={onKitDeleteClick}
              ></KitListItems>
            </AssociatedBoxItem>
          );
        })}
      </AssociatedBox>
    </KitBoxSection>
  );
};

export default KitSection;
