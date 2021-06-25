import styled from "styled-components";

export const CheckBoxItem = styled.div`
  min-width: 100%;
  display: flex;
  align-items: flex-end;
  & .form-single {
    margin-bottom: 16px;
    max-width: 100%;
    width: 100%;
    :first-of-type {
      max-width: 140px !important;
      margin-right: 16px !important;
    }
  }
`;

export const ListFeatureClose = styled.a`
  padding-bottom: 30px;
  cursor: pointer;
  display: flex;
  min-width: 15px !important;
  align-items: flex-end;
  justify-content: center;
`;
