import styled from "styled-components";

//! import searchProductItems

import SearchProductItem from "./searchproductItem";

const SearchProductContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  & h6 {
    color: #828282;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.86px;
  }
`;

const SearchProduct = ({ data }) => {
  return (
    <SearchProductContainer>
      <h6>products</h6>
      {data.map((item, key) => {
        return <SearchProductItem item={item} key={key}></SearchProductItem>;
      })}
    </SearchProductContainer>
  );
};

export default SearchProduct;
