import styled from "styled-components";

export const ProductTypeContainer = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  & h6 {
    color: #335491;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.8px;
    line-height: 12px;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  p {
    padding-left: 8px;
    opacity: 0.75;
    color: #0b0212;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    margin-top: 8px;
  }
  h6 {
    color: #335491;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.8px;
    line-height: 12px;
    text-align: left;
    text-transform: uppercase;
  }
`;

export const MembersFormContainer = styled.div``;

export const FormSingleSelect = styled.div`
  width: 100%;
  max-width: 100%;
  margin-right: 0;
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: column;
`;

export const FormLabelContainer = styled.div`
  margin-bottom: 6px;
`;

export const ProductTypeSelectContainer = styled.div`
  max-width: 240px;
`;

export const ProductTypeBox = styled.div`
  padding-top: 8px;
`;

export const ProductTypeBoxBody = styled.div``;
