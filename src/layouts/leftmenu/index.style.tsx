import styled from "styled-components";

type AdminMenuNavProps = {
  hide: boolean;
};

type AdminMenuContainerProps = {
  leftMenuOpen: boolean;
};

export const AdminMenuContainer = styled.div<AdminMenuContainerProps>`
  background-color: transparent;
  display: block;

  @media screen and (max-width: 992px) {
    background-color: white !important;
    height: 100% !important;
    display: block;
    overflow: hidden;
    opacity: ${(props) => (props.leftMenuOpen ? "1" : "0")};
    width: ${(props) => (props.leftMenuOpen ? "auto" : "0")};
    transition: all ease-in-out;
  }
`;

export const AdminMenuNav = styled.div<AdminMenuNavProps>`
  position: relative;

  width: ${(props) => (props.hide ? "68px" : "226px")};
  padding: 40px 10px 10px 32px;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-bottom: 16px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  transition: width 0.3s ease-in-out;
  @media screen and (max-width: 991px) {
    width: 100%;
    border-radius: 0;
    box-shadow: 0 0 0;
    padding: 12px 24px 10px;
  }
`;

export const MinimizeButtonContainer = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 7px;
  right: 11px;
  transition: background 0.5s;
  transition-delay: 0.5s;
  background: 0 0;
  border: 0;
  text-decoration: 0;
  outline: 0;
`;

type AdminMenuWrapProps = {
  overflowflag: boolean;
  height: string;
};

export const AdminMenuWrap = styled.div<AdminMenuWrapProps>`
  height: ${(props) => props.height};
  padding-right: 6px;
  position: relative;
  overflow-y: ${(props) => (props.overflowflag ? "scroll" : "hidden")};
  overflow-anchor: none;
`;

export const AdminMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style: none;
`;
type CopyRightProps = {
  hide: boolean;
};
export const CopyRight = styled.div<CopyRightProps>`
  width: ${(props) => (props.hide ? "0px" : "226px")};
  font-size: ${(props) => (props.hide ? "0" : "12px")};
  opacity: ${(props) => (props.hide ? "0" : "1")};
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 10px;
  text-align: center;
  opacity: 1;
  pointer-events: none;
  transition: 0.3s ease-in-out;
  transition-delay: 0.5s;
  color: #335491;
`;
type AdminMenuHeaderProps = {
  leftMenuOpen: boolean;
};
export const AdminMenuHeader = styled.div<AdminMenuHeaderProps>`
  position: relative;
  width: 100%;
  padding: 0 16px;
  height: 69px;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  background-color: white;
  display: none;

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    opacity: ${(props) => (props.leftMenuOpen ? "1" : "0")};
    width: ${(props) => (props.leftMenuOpen ? "auto" : "0")};
    transition: all ease-in-out;
  }

  @media screen and (max-width: 767.98px) {
    height: 55px;
  }
`;
export const AdminMenuClose = styled.div`
  cursor: pointer;
  margin-right: 15px;
`;

export const AdminMenuLogo = styled.div`
  width: 100%;
  margin-right: 16px;
  display: flex;
  flex-direction: row;
  & span {
    color: #315293;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const AdminMenuImg = styled.div`
  width: 100%;
  max-width: 24px;
  margin-right: 7px;
`;
type AdminMenuUserSelectprops = {
  leftMenuOpen: boolean;
};
export const AdminMenuUserSelect = styled.div<AdminMenuUserSelectprops>`
  display: none;
  margin-bottom: 32px;
  z-index: 999;
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    opacity: ${(props) => (props.leftMenuOpen ? "1" : "0")};
    width: ${(props) => (props.leftMenuOpen ? "auto" : "0")};
    transition: all ease-in-out;
  }
`;
export const UserSelect = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
`;

export const UserSelectPhoto = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  background-color: #335491;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  & img {
    max-width: 40px;
    min-height: 40px;
  }
  & span {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
  }
`;
export const UserSelectDropDown = styled.div`
  display: flex;
`;

export const AdminMenuFooter = styled.div`
  padding-top: 20px;
  margin-bottom: 7px;
`;

export const AdminFooterFormWrap = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;
type swicth1Props = {
  switch1: boolean;
};
export const AdminFooterFormList1 = styled.div<swicth1Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  & b {
    font-weight: ${(props) => (props.switch1 ? "500" : "normal")};
    margin-left: 5px;
    font-size: 12px;
    color: #0b0212;
  }
`;
type swicth2Props = {
  switch2: boolean;
};
export const AdminFooterFormList2 = styled.div<swicth2Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  & b {
    font-weight: ${(props) => (props.switch2 ? "500" : "normal")};
    margin-left: 5px;
    font-size: 12px;
    color: #0b0212;
  }
`;

export const SwitchButtonContainer = styled.div`
  margin-right: 20px;
`;
