import styled from "styled-components";

export const AssociatedBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  padding-top: 24px;
  margin-bottom: 16px;

  & .header-title {
    margin-bottom: 23px;
    padding-left: 24px;
    color: #335491;
    font-weight: 500;
    letter-spacing: 0.8px;
    line-height: 12px;
    margin-bottom: 23px;
    font-size: 12px;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
  }
`;

export const AssociatedBoxItem = styled.div`
  padding: 6px;
`;

export const SearchInputContainer = styled.div`
  padding: 0 24px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SearchContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
export const AssResult = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  & .title {
    color: #828282;
    font-weight: 400;
    letter-spacing: 0.86px;
    margin-left: 20px;
    margin-bottom: 14px;
    font-size: 12px;
    text-align: left;
    text-transform: uppercase;
    display: inline-block;
  }
`;
