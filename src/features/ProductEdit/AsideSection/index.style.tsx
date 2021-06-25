import styled from "styled-components";

export const ScrollDiv = styled.div`
  margin-left: -10px;
  margin-right: -10px;
`;

export const StatisticBox = styled.div`
  max-width: 336px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  padding: 24px 24px 16px 22px;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
`;

export const StatisticBoxHeader = styled.div`
  min-width: 274px;
`;

export const StatisticBoxHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const StatisticNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  & h3 {
    color: #0b0212;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 8px;
    font-weight: 500;
  }
  & span {
    color: #0b0212;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const StatisticBoxPost = styled.ul`
  margin-bottom: 40px;
`;

export const StaticBoxPostLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  & span {
    font-size: 16px !important;
  }
  & ul {
    margin-left: auto;
    margin-right: 8px;
    cursor: pointer;
    display: flex;
    & li {
      position: relative;
      width: 20px;
      height: 20px;
      padding-left: 0;
      margin-right: -4px;
    }
  }
`;

export const StatisticBoxReaction = styled.div`
  display: flex;
  flex-direction: column;
  & h4 {
    color: #0b0212;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    text-align: left;
    display: inline-block;
    margin-bottom: 15px;
  }
`;

export const StatisticBoxEmotion = styled.div`
  & ul {
    display: flex;
    & li {
      display: flex;
      margin-right: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & img {
        width: 20px;
        height: 20px;
        position: static;
      }
      & span {
        color: #0b0212;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
      }
      & strong {
        font-weight: 500;
        font-size: 16px;
        color: #0b0212;
      }
    }
  }
`;

export const ReachAndConversation = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & ul {
    max-width: 272px;
    width: 100%;
      margin-top:45px;
    & h3 {
      color: #0b0212;
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      text-align: left;
      display: inline-block;
      margin-bottom: 15px;
    }
    & li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #0b0212;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
      margin-bottom: 15px;
    }
`;
