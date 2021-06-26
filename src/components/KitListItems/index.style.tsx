import styled from "styled-components";

import product_small from "assets/images/product/editProduct/product_small.png";
export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 0;
`;

export const SelectItemLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const SeletItemPhoto = styled.div`
  min-width: 72px;
  max-width: 72px;
  height: 72px;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  margin-right: 12px;
  position: relative;
  background-color: #f4f8ff;
  align-items: center;
  background-image: url(${product_small});
`;
export const StoreImg = styled.div`
  position: absolute;
  left: 4px;
  top: 4px;
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
`;

export const SelectItemInfo = styled.div`
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
    opacity: 0.75;
    font-weight: 500;
    margin-bottom: 10px;
  }
  & ul {
    display: inline-flex !important;

    & li {
      color: #0b0212;
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      text-align: left;
      margin-right: 18px;
      & span {
        color: #0b0212 !important;
        font-size: 14px !important;
        font-weight: 400;
        line-height: 14px;
        text-align: left;
        margin: 0 !important;
      }
    }
  }
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin: 0px !important;
  }
`;
export const CountContent = styled.div`
  position: relative;
  margin-right: 8px;
  height: 24px;
  min-width: 72px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f8f9fb;
  display: flex;
  align-self: center;
  & button {
    background: 0 0;
    border: 0;
    text-decoration: none;
    outline: 0;
  }
  & .btn-button {
    position: absolute;
    top: 0;
    width: 24px;
    height: 24px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  }
  & .minuse {
    left: 0;
  }
  & .plus {
    right: 0;
  }
  & .item-cart-int {
    padding: 0 5px;
    width: 100%;
    text-align: center;
    line-height: 24px;
    color: #0b0212 !important;
    font-size: 14px;
    font-weight: 300;
    margin: 0;
  }
`;

export const SelectedItemRight = styled.div`
  padding-right: 32px;
  & a {
    cursor: pointer;
    height: 100%;
    color: #335491 !important;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: right;
    text-decoration: underline !important;
    display: flex;
  }
`;
