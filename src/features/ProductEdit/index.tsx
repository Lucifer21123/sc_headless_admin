import styled from "styled-components";

import { useState } from "react";

import backSvg from "assets/icons/back.svg";

const ProductEditContainer = styled.div`
  margin-right: 25px;
  max-width: 560px;

  p {
    padding-left: 8px;
    opacity: 0.75;
    color: #0b0212;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    margin-top: 8px;
  }
  h6 {
    color: #335491;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.8px;
    line-height: 12px;
    text-align: left;
    text-transform: uppercase;
  }
  @media screen and (max-width: 992px) {
    width: 90%;
    margin-top: 60px;
    margin-right: 0px;
  }
  @media screen and (min-width: 1440px) {
    width: 60%;
    max-width: 560px;
  }
`;

const BackButtonCotainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 8px;
  & a {
    color: #35558f;
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: none;
    }
  }

  & img {
    margin-right: 6px;
  }
`;

import ProductTitle from "./ProductTitle/ProductTitle";
import ProductImage from "./ProductImage";
import ProductType from "./ProductType";
import Pricing from "./Pricing";
import Inventroy from "./Inventory";
import Availability from "./Availability";
import Organization from "./Organization";
import Organization2 from "./Organization2";
import TermSection from "./Terms";
import Permission from "./Permission";
import LongDescription from "./LongDescription";
import CustomizationSection from "./CustomizationSection";
import PreviewSection from "./PreviewSection";
import Link from "next/link";
const ProductEdit = ({ data, store }) => {
  const onChange = (type, value) => {};
  let link = "/admin/" + store + "/products";
  return (
    <ProductEditContainer>
      <BackButtonCotainer>
        <img src={backSvg}></img>
        <Link href={link}> Edit Product</Link>
      </BackButtonCotainer>
      <ProductTitle
        data={data.mutable.public}
        ageBracket={data.age_bracket}
        onChange={onChange}
      ></ProductTitle>
      <ProductImage></ProductImage>
      <ProductType></ProductType>
      <Pricing></Pricing>
      <Inventroy></Inventroy>
      <Availability></Availability>
      <Organization></Organization>
      <Organization2></Organization2>
      <TermSection></TermSection>
      <Permission></Permission>
      <LongDescription></LongDescription>
      <CustomizationSection></CustomizationSection>
      <PreviewSection></PreviewSection>
    </ProductEditContainer>
  );
};
export default ProductEdit;
