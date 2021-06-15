import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1150px;
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
    text-transform: uppercase;
  }
  @media screen and (max-width: 991px) {
    padding-left: 0 !important;
  }
`;

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const SearchContent = styled.div`
  max-width: 290px;
  width: 360px;
  transition: 0.3s;
  margin-right: 24px;
  @media screen and (max-width: 1070px) {
    margin-bottom: 17px;
  }
  @media screen and (max-width: 991px) {
    width: 430px;
  }
  @media screen and (max-width: 767.98px) {
    width: 100%;
  }
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
  @media screen and (max-width: 991px) {
    margin-bottom: 6px;
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
    @media screen and (max-width: 1120px) {
      margin-right: 16px;
    }
    @media screen and (max-width: 991px) {
      margin-right: 37px;
    }
    @media screen and (max-width: 480px) {
      margin-right: 20px;
      :nth-child(4) {
        padding-top: 7px;
        margin-right: 45px !important;
        margin-left: 72px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 6px;
  }
  @media screen and (max-width: 430px) {
    flex-wrap: wrap;
  }
`;

export const ProductItemsList = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
