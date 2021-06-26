import styled from "styled-components";

export const KitBoxSection = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    margin-bottom: 40px !important;
  }
  & h6 {
    display: flex;
    align-items: center;
    margin-bottom: 22px !important;
  }
  & form-single {
    margin-bottom: 32px;
  }
`;
export const CheckboxContainer = styled.div`
  margin-bottom: 20px;
`;
export const SearchInputContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const SearchContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const AssociatedBox = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  & span {
    color: #828282 !important;
    font-weight: 400 !important;
    letter-spacing: 0.86px !important;
    margin-left: 20px !important;
    margin-bottom: 14px !important;
    font-size: 12px !important;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
  }
`;

export const AssociatedBoxItem = styled.div`
  padding: 6px;
`;
