import styled from "styled-components";

type AdminSubMenuLink = {
  hide: boolean;
};
export const IconArrow = styled.svg<AdminSubMenuLink>`
  width: 24px;
  height: 20px;
  top: 50%;
  opacity: ${(props) => (props.hide ? 0 : 1)};
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  transition-delay: 0.3s;
`;

export const AdminMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style: none;
`;

export const AdminSubMenuItem = styled.li`
  width: 100%;
  min-height: 30px;
  margin-bottom: 7px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  list-style: none;
  padding-top: 7px;
  min-height: 40px;
  border-top: 1px solid rgba(49, 82, 147, 0.25);
  cursor: pointer;
`;

export const AdminSubMenuLink = styled.div<AdminSubMenuLink>`
  display: flex;
  align-items: center;
  padding-left: 36px;
  line-height: 30px;
  position: relative;
  span {
    font-size: ${(props) => (props.hide ? "0" : "14px")};
    opacity: ${(props) => (props.hide ? 0 : 1)};
    font-weight: 500;
    position: relative;
    min-height: 29px;
    display: inline-block;
    white-space: nowrap;
    color: #315293;
    transition: position 0.5s, opacity 0.5s;
    transition-delay: 0.3s;
  }
`;
type AdminSubMenuContainerProps = {
  show: boolean;
};
export const AdminSubMenuContainer = styled.div<AdminSubMenuContainerProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  width: auto;
  height: ${(props) => (props.show ? "auto" : "0")};
  transition: height 0.3s ease-in-out;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
`;

export const AdminMenuItem = styled.li`
  width: 100%;
  min-height: 30px;
  margin-bottom: 7px;
  overflow: hidden;
  transition: 0.6s ease-in-out;
  list-style: none;
`;

type AdminMenuLinkProps = {
  hide: boolean;
};
export const AdminMenuLink = styled.div<AdminMenuLinkProps>`
  display: flex;
  align-items: center;
  padding-left: 36px;
  line-height: 30px;
  position: relative;
  span {
    font-size: ${(props) => (props.hide ? "0" : "14px")};
    opacity: ${(props) => (props.hide ? 0 : 1)};
    position: relative;
    min-height: 29px;
    display: inline-block;
    white-space: nowrap;
    color: #315293;
    transition: position 0.5s, opacity 0.5s;
    transition-delay: 0.3s;
  }
`;
