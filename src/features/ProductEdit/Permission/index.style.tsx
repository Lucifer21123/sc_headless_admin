import styled from "styled-components";

export const AdditionBox = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  -webkit-box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  & h6 {
    margin-bottom: 23px;
  }
  & span {
    display: flex;
    fons-size: 16px !important;
  }
  & .max-bottom {
    margin-bottom: 8px;
    max-width: 100% !important;
  }
`;

export const SingleCheck = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  & span {
    color: #0b0212;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const SingleCheckBody = styled.div`
  display: block;
`;

export const DoubleInput = styled.div`
  display: flex;
  width: 100%;
  & .form-single {
    margin-bottom: 24px;
    :first-of-type {
      margin-right: 30px;
    }
  }
`;
export const CheckLabelContainer = styled.div`
  margin-bottom: 20px;
`;

export const CheckedChildrenBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & .check {
    margin-top: -18px !important;
  }
`;
export const DoubleInputSelect = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  & .form-single {
    margin-right: 0 !important;
    margin-bottom: 8px !important;
  }
`;
export const DoublePriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;

  & .form-single {
    max-width: 240px;
    :first-of-type {
      margin-right: 30px;
    }
  }
`;
