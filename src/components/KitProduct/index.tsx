import styled from "styled-components";
import { useState } from "react";
//!import image
import product_small from "assets/images/product/editProduct/product_small.png";
import category_mini from "assets/images/product/editProduct/category_mini.png";
import CheckBox from "components/CustomCheckBox";

const KitProductContainer = styled.div`
  backbround-color: white;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f8f9fb;
  }
`;
const ProductAvatarContainer = styled.div`
  max-width: 50px;
  border-radius: 0px;
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  margin-bottom: 0;
  & img {
    position: absolute;
    width: auto;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & span {
    position: absolute;
    left: -7px;
    top: -6px;
    z-index: 22;
    width: 24px;
    height: 24px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;
const SelectInfo = styled.div`
  display: flex;
  flex-direction: column;
  & strong {
    color: #0b0212;
    font-size: 18px;
    font-style: normal;
    letter-spacing: 0.64px;
    line-height: 18px;
    text-align: left;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 276px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  & ul {
    display: flex;
    & li {
      color: #0b0212;
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      text-align: left;
      margin-right: 18px;
    }
  }
`;

const CheckBoxContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const KitProduct = ({ item, onChecked }) => {
  const [checked, setchecked] = useState(false);

  return (
    <KitProductContainer
      onClick={() => {
        setchecked(!checked);
        onChecked(item.id, checked);
      }}
    >
      <ProductAvatarContainer>
        <img src={product_small}></img>
        <span>
          <img src={category_mini} alt="" />
        </span>
      </ProductAvatarContainer>
      <SelectInfo>
        <strong>{item.title}</strong>
        <ul>
          <li>
            sku: <span>{item.sku}</span>
          </li>
          <li>
            qty: <span>{item.qty}</span>
          </li>
          <li>${item.price}</li>
        </ul>
      </SelectInfo>
      <CheckBoxContent>
        <CheckBox
          borderSize="3px"
          border="#f77d0e"
          activeBorder={"#f77d0e"}
          checked={checked}
          onClick={onChecked}
        ></CheckBox>
      </CheckBoxContent>
    </KitProductContainer>
  );
};

export default KitProduct;
