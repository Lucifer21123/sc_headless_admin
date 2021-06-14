import styled from "styled-components";
import SearchPopularItem from "./searchPopular";
import SearchImg from "./searchImg";

const PopularItemContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  & span {
    color: #828282;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.86px;
  }
`;

const PopularItems = ({ items }) => {
  return (
    <PopularItemContainer>
      <span>popular searches</span>
      {items.popularItems.map((item, key) => {
        return <SearchPopularItem item={item} key={key}></SearchPopularItem>;
      })}
      <SearchImg item={items.popularImg}></SearchImg>
    </PopularItemContainer>
  );
};

export default PopularItems;
