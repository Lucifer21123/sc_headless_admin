import styled from "styled-components";

type AdminMenuNavProps = {
  hide: boolean;
};

export const AdminMenuContainer = styled.div`
  height: 100%;
  //overflow-y: scroll;
  background-color: transparent;
  diaplay: block;
  @media screen and (max-width: 960px) {
    display: none;
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
  min-height: 500px;
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
