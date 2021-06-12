import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  margin-bottom: 15px;
  & h1 {
    font-size: 18px;
    color: #335491;
    margin-bottom: 0px;
    letter-spacing: 0.8px;
    font-weight: 500;
    margin-right: 8px;
  }
`;

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchContent = styled.div`
  max-width: 290px;
  width: 360px;
  transition: 0.3s;
  margin-right: 24px;
`;

export const SortBoxInline = styled.div`
  display: flex;
  align-items: center;
  margin-right: 37px;
  & p {
    font-size: 12px;
    color: #828282;
    letter-spacing: 0.86px;
    text-align: left;
    text-transform: uppercase;
    margin: 0px;
    margin-right: 15px;
  }
`;

export const SortBoxFilter = styled.div`
  display: flex;
  align-items: center;
  & p {
    font-size: 12px;
    color: #828282;
    letter-spacing: 0.86px;
    text-align: left;
    text-transform: uppercase;
    margin: 0px;
    margin-right: 15px;
  }
  & .sort-box-select {
    margin-right: 37px;
  }
`;

export const ProductItemsList = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
