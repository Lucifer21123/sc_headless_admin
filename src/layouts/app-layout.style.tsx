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
  width: 100%;
  z-index: 0;
`;

export const HeaderContainer = styled.div`
  padding: 0 16px;
  position: fixed;

  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 999;
  tranition: 0.2s;
  background-color: #fff;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  width: 100%;
  height: 69px;
  @media (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const LeftMenuContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 94px;
  bottom: 0;
  transition: top 0.3s;
  z-index: 3;
`;
