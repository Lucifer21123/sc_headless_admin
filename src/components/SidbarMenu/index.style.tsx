import styled from "styled-components";

type MenuContainerProps = {
  open: boolean;
};

export const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050000;
  display: ${(props) => (props.open ? "block" : "none")};
  width: 100%;
  height: 100%;
  outline: 0;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 0.15s linear;
  transition-property: opacity;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  transition-delay: 0s;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 17px;
`;

export const ModalDialog = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: auto;
  width: 520px;
  height: 100%;
  transform: translate3d(0, 0, 0);
  display: flex;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
`;

export const ModalContent = styled.div`
  height: 100%;
  padding: 0;
  box-shadow: 0 15px 50px 30px rgb(11 2 18 / 8%);
  position: relative;
  border-radius: 8px;
  display: flex;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 0 32px;
  height: 88px;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  & button {
    position: relative;
    padding: 0;
    top: 25px;
    right: 25px;
    width: 24px;
    height: 24px;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    margin: 0 0 auto;
    background: 0 0;
    border: 0;
    text-decoration: none;
    outline: 0;
  }
`;

export const HeadModalInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeadModalAvatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 16px;
  margin-bottom: 0;
  background-color: #335491;
  display: flex;
  align-items: center;
  justify-content: center;
  & .img-container {
    display: none;
  }
  & span {
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    z-index: 1;
    color: #fff;
  }
`;

export const HeadModalInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  & h2 {
    font-size: 18px;
    letter-spacing: 0.64px;
    line-height: 18px;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 6px;
    color: #335491;
  }
  & p {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.5;
    color: #212529;
  }
`;

export const ModalBody = styled.div`
  padding: 24px 24px 80px;
  height: calc(100% - 80px);
  position: relative;
  flex: 1 1 auto;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionContent = styled.div`
  width: calc(100% - 18px);
  max-width: 330px;
  margin-bottom: 20px;
  & span {
    height: 14px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.86px;
    text-transform: uppercase;
    margin-bottom: 14px;
    color: #828282;
    padding-left: 0;
    display: flex;
    align-items: center;
  }
  & .other-links {
    & ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      padding: 0;
      & li {
        width: 100%;
        margin-bottom: 7px;
        & a {
          color: #007bff;
          background-color: transparent;
          outline: 0;
          text-decoration: none;
          border: 0;
          padding-left: 0;
          & p {
            min-height: 29px;
            display: inline-block;
            font-size: 14px;
            white-space: nowrap;
            color: #315293;
            margin-bottom: 0;
          }
          & .other-links-int {
            margin-left: 8px;
            color: #f97d00;
          }
          :hover {
            border: 1;
            outline: 1;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

export const ThemeBackground = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap !important;
    & li {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
`;

export const ThemeSelect = styled.div`
  display: flex;
  flex-direction: column;
  & .theme-box-shadow {
    cursor: pointer;
    position: relative;
    width: 57px;
    height: 57px;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    border-radius: 5px;
    margin-bottom: 8px;
    box-shadow: 2px 2px 4px 1px rgb(11 2 18 / 8%);
    & img {
      width: 55px;
      height: 55px;
    }
    :hover {
      border-width: 1px;
      border-color: #f97d00;
    }
  }
  & span {
    font-size: 14px;
    line-height: 17px;
    color: #0b0212;
  }
`;

export const ModalFooter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 80px;
  z-index: 2;
  background-color: #fff;
  padding: 0 24px;
`;

export const FooterCenter = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;

  & .icon-button {
    & span {
      margin-left: 8px;
      margin-bottom: 0px;
      font-size: 16px;
      line-height: 19px;
      color: #335491;
    }
  }
`;
