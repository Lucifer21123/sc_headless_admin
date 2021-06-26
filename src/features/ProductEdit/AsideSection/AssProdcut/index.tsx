import { useState } from "react";
import {
  AssociatedBox,
  AssociatedBoxItem,
  SearchContent,
  AssResult,
  SearchInputContainer,
} from "./index.style";
import KitListItems from "components/KitListItems";
import KitProduct from "components/KitProduct";
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
import SearchInput from "components/SearchInput";
const AssProduct = () => {
  const OnSeach = (value) => {};
  const onClick = () => {};
  const [searchData_h, setsearchData] = useState(searchData);
  const [kitItemsData_h, setkitItemsData] = useState([]);
  const [state, setstate] = useState(false);
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
  return (
    <AssociatedBox>
      <strong className="header-title">ASSOCAITED PRODUCTS</strong>
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
      <AssResult>
        <span className="title">SEASONAL LIST</span>
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
      </AssResult>
    </AssociatedBox>
  );
};

export default AssProduct;
