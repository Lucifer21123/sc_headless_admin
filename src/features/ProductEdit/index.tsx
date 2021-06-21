import styled from "styled-components";
const ProductEditContainer = styled.div`
  margin-right: 25px;
  max-width: 560px;
  @media screen and (min-width: 992px) {
    max-width: 684px;
    width: 58%;
    margin-top: 0px;
  }
  @media screen and (min-width: 1440px) {
    width: 60%;
    max-width: 560px;
  }
`;

import ProductTitle from "./ProductTitle/ProductTitle";
import ProductImage from "./ProductImage";
import ProductType from "./ProductType";

const ProductEdit = ({ data, onTitleChange, onDescriptionChange }) => {
  return (
    <ProductEditContainer>
      <ProductTitle
        data={data}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
      ></ProductTitle>
      <ProductImage></ProductImage>
      <ProductType></ProductType>
    </ProductEditContainer>
  );
};
export default ProductEdit;
