import styled from "styled-components";

const SearchProductItemContainer = styled.div`
  display: flex;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #fff;
  transition: 0.3s;
  :hover {
    box-shadow: 2px 2px 4px 1px rgb(11 2 18 / 8%);
  }
`;

const AbandonedCardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 72px;
  height: 72px;
  background-color: #f8f9fb;
  & .card-img {
    width: auto;
    min-height: 50px;
    max-height: 50px;
    margin-bottom: 0;
    text-align: center;
    padding: 3px;
  }
`;

const AbandonedCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & strong {
    color: #0b0212;
    font-weight: 500;
    font-size: 16px;
  }
  & span {
    color: #0b0212 !important;
    font-size: 14px !important;
    text-transform: none !important;
    font-weight: 400;
    letter-spacing: 0.86px;
  }
`;

const SearchProductItem = ({ item }) => {
  return (
    <SearchProductItemContainer>
      <AbandonedCardLeft>
        <img src={item.productSrc} alt="" className="card-img" />
      </AbandonedCardLeft>
      <AbandonedCardInfo>
        <strong>{item.title}</strong>
        <span>{item.price}</span>
      </AbandonedCardInfo>
    </SearchProductItemContainer>
  );
};

export default SearchProductItem;
