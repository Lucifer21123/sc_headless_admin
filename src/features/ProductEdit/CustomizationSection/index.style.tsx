import styled from "styled-components";

type CustomizationArrowProps = {
  show: boolean;
};

export const CustomizationSectionContainer = styled.div`
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  position: relative;
  width: 100%;
  padding: 24px;
`;
export const CustomizationHeader = styled.div`
  cursor: pointer;
  & h3 {
    color: #335491;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 18px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 0;
    text-transform: uppercase;
  }
`;
export const ArrowContainer = styled.div<CustomizationArrowProps>`
  position: absolute;
  right: 24px;
  top: 20px;
  bottom: 0;
  transition: 0.3s;
  width: 14px;
  height: 9px;
  & img {
    width: 100%;
    height: 100%;
    transform: rotate(${(props) => (props.show ? 180 : 0)}deg);
  }
`;
export const GitShoppingBody = styled.div`
  & h6 {
    margin-top: 20px;
    margin-bottom: 23px;
  }
`;

export const DoubleBox = styled.div`
  display: flex;
  & .form-single {
    width: 50% !important;
    margin-right: 0;
    :first-of-type {
      margin-right: 30px;
    }
  }
`;
export const CheckBoxList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CheckBox = styled.div`
  padding: 0px 0 24px;
  display: flex;
  flex-direction: column;
`;
