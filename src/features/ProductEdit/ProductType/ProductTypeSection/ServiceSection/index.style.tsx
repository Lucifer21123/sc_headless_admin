import styled from "styled-components";
export const ServiceSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  & h6 {
    margin-bottom: 30px;
  }
`;

export const ListFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

export const ListFeaturesBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkToContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

export const PageBoxSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageBoxDescription = styled.div`
  margin: 5px 0 5px 8px;
`;

type SearchHideProps = {
  searchHide: boolean;
};

export const SearchSelectUl = styled.ul<SearchHideProps>`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  position: static !important;
  margin-top: 0 !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 1px rgba(11, 2, 18, 0.08) !important;
  & li {
    padding: 6px 0px;
    :hover {
      background-color: #f8f9fb;
    }
  }
`;

export const SelectedDescription = styled.div`
  padding: 5px 5px;
  & span {
    padding: 0;
  }
`;

export const SelectedUl = styled.ul`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  & li {
    padding: 6px 0px;
    :hover {
      background-color: #f8f9fb;
    }
  }
`;

export const SelectLadingBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentFreqContainer = styled.div`
  display: flex;
  flex-direction: column;
  flx: 1;
  & h6 {
    margin-bottom: 22px;
  }
`;

export const PaymentCircleContainer = styled.div`
  margin-bottom: 8px;

  & p {
    margin-bottom: 27px;
    padding-left: 4px;
  }
`;

export const PaymentSelectContainer = styled.div`
  max-width: 240px;
`;

export const DoublePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .form-single {
    margin-bottom: 32px;
    & p {
      margin-bottom: 0px;
    }
  }
`;

export const PriceContainer = styled.div`
  margin-right: 30px;
  width: 50%;
`;

export const CheckedBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const TaxSelectCotainer = styled.div`
  display: block;
  max-width: 240px;
  min-height: 38px;
  margin-bottom: 15px;
  z-index: 1123123 !important;
`;
