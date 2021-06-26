import { useState } from "react";
import * as Page from "./index.style";
import product_small from "assets/images/product/editProduct/product_small.png";
import category_mini from "assets/images/product/editProduct/category_mini.png";
const KitListItems = ({ item, onDelete, onChange }) => {
  const [count, setcount] = useState(item.count);
  return (
    <Page.SelectItem>
      <Page.SelectItemLeft>
        <Page.SeletItemPhoto>
          <Page.StoreImg>
            <img src={category_mini} alt="" />
          </Page.StoreImg>
        </Page.SeletItemPhoto>
        <Page.SelectItemInfo>
          <strong>{item.title}</strong>
          <ul>
            <li>
              sku: <span>{item.sku}</span>
            </li>
            <li>
              <span>{item.price}</span>
            </li>
          </ul>
          <Page.CountContainer>
            <Page.CountContent>
              <button
                className="btn-button minuse"
                onClick={() => {
                  setcount(count - 1);
                  onChange(count);
                }}
              >
                -
              </button>
              <span className="item-cart-int">{count}</span>
              <button
                className="btn-button plus"
                onClick={() => {
                  setcount(count + 1);
                  onChange(count);
                }}
              >
                +
              </button>
            </Page.CountContent>
            <span>quantity</span>
          </Page.CountContainer>
        </Page.SelectItemInfo>
      </Page.SelectItemLeft>
      <Page.SelectedItemRight>
        <a
          onClick={() => {
            onDelete(item.id);
          }}
        >
          Delete
        </a>
      </Page.SelectedItemRight>
    </Page.SelectItem>
  );
};

export default KitListItems;
