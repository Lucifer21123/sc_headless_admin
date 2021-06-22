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
