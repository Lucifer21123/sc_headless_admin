import styled from "styled-components";

type AdminMenuNavProps = {
  hide: boolean;
};

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

export const AdminMenuWrap = styled.div`
  padding-right: 6px;
  position: relative;
  overflow: hidden;
  overflow-anchor: none;
`;

export const AdminMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style: none;
`;

export const AdminMenuItem = styled.li`
  width: 100%;
  min-height: 30px;
  margin-bottom: 7px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  list-style: none;
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
  transition-delay: ${(props) => (props.hide ? "0.3s" : "0")};
  position: absolute;
  right: 0;
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
export const AdminSubMenuContainer = styled.div`
  display: block;
  width: auto;
  height: auto;
`;
