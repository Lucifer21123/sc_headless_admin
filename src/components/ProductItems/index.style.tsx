import styled from "styled-components";

export const ProductItemContainer = styled.div`
  width: 100%;
  box-shadow: 2px 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 8px;
  position: relative;
  transition: all 1s ease;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductItemPhoto = styled.div`
  min-width: 72px;
  max-width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  background-color: #f4f8ff;
  align-items: center;

  & span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #99a9c9;
    font-size: 24px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-transform: uppercase;
  }
  & img-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 72px !important;
    max-width: 72px !important;
    height: 72px;
    z-index: -1000;
  }
`;

export const ProductItemInfo = styled.div`
  margin-left: 12px;
`;

export const ProductItemInfoHeader = styled.h3`
  opacity: 0.75;
  color: #0b0212;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.64px;
  line-height: 18px;
  text-align: left;
  margin-bottom: 9px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: calc(100% - 5px);
  max-width: 450px;
`;

export const ProductItemInfoUL = styled.ul`
  display: flex;
  align-items: center;
`;

export const ProductItemLi = styled.li`
  color: #0b0212;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  margin-right: 17px;
  & span {
    color: #0b0212;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    margin-right: 0px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductReactions = styled.div`
  margin-right: 70px;
`;
export const ProductItemsListControl = styled.div`
  display: flex;
  align-items: center;
  & a {
    cursor: pointer;
    color: #335491 !important;
    font-style: normal;
    letter-spacing: normal;
    text-align: right;
    text-decoration: underline !important;
    display: inline-block;
    margin-right: 24px;
  }
`;
type ItemBodyProps = {
  hide: boolean;
};

export const ProductItemBody = styled.div<ItemBodyProps>`
  max-width: 660px;
  width: 100%;
  max-height: ${(props) => (props.hide ? "0" : "1000px")};
  opacity: ${(props) => (props.hide ? "0" : "1")};
  margin: ${(props) => (props.hide ? "0px 0px 0px 84px" : "40px 0px 0px 84px")};
  transition: all 0.5s ease-in-out;
  visibility: ${(props) => (props.hide ? "hidden" : "visible")};
`;

export const StatisticBox = styled.div`
  border-radius: 0;
  box-shadow: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
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
    font-size: 16px;
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
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 22px;
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
  justify-content: space-between;
  margin-bottom: 15px;
  & ul {
    max-width: 272px;
    width: 100%;
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
  }
`;
