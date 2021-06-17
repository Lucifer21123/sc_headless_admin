import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const LayoutWrapper = styled.div`
  background-color: #f8f9fb;
  width: 100%;
  height: 100vh;
`;

export const BodyContainer = styled.div`
  padding-top: 75px;
  transition: 0.3s;
  position: relative;
  background-color: #f8f9fb !important;
  box-sizing: border-box;
`;
type HeaderContainerProps = {
  transform: string;
};

export const HeaderContainer = styled.div<HeaderContainerProps>`
  padding: 0 16px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 999;
  transform: translateY(${(props) => props.transform});
  transition: 0.2s;
  background-color: #fff;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  width: 100%;
  height: 69px;
  transform: ${(props) => props.transform};
  @media (min-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 767.98px) {
    height: 55px;
  }
`;

type LeftMenuContainerProps = {
  position: string;
  leftMenuOpen: boolean;
};

export const LeftMenuContainer = styled.div<LeftMenuContainerProps>`
  position: fixed;
  left: 0px;
  top: ${(props) => props.position};
  transition: top 0.3s ease-in-out, z-index 0.3s;
  z-index: 3;
  @media screen and (max-width: 991px) {
    top: 0;
    left: ${(props) => (props.leftMenuOpen ? "0" : "-100%")};
    z-index: 999991;
    width: 100%;
    height: 100%;
    transition: left 0.5s ease-in-out;
  }
`;
