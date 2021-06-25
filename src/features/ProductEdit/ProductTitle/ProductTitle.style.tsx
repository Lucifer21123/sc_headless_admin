import styled from "styled-components";

export const SingleFormContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: 0;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const MaxText = styled.div`
  width: 100% !important;
  position: relative;
  margin-bottom: 8px;
`;
export const styleProperty = {
  fontSize: "14px",
  Weight: "400",
  marginBottom: "6px",
  Color: "#828282",
};

export const SeanonTitleBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SeasonTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 24px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const SeasonTitleBoxOther = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 8px;
  & p {
    opacity: 0.75;
    color: #0b0212;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    padding: 0 !important;
    margin-bottom: 15px !important;
  }
  & h5 {
    color: #315293;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.8px;
    line-height: 12px;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 22px;
  }
`;

export const MembersForm = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const MemversTagForm = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const SelectBefore = styled.div`
  position: relative;
  width: 100%;
  max-width: 328px;
`;
