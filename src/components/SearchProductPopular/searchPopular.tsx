import styled from "styled-components";

const SearchItemContainer = styled.div`
  padding-top: 8px;
  height: 32px;
  position: relative;
  z-index: 999;
  & p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
    :hover {
      color: #335491;
    }
  }
  :hover {
    cursor: pointer;
    background-color: #f8f9fb;
  }
`;

const SearchPopularItem = ({ item }) => {
  return (
    <SearchItemContainer>
      <p>{item.title}</p>
    </SearchItemContainer>
  );
};

export default SearchPopularItem;
