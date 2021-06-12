import React, { useState } from "react";
import Header from "./header/header";

import {
  LayoutWrapper,
  BodyContainer,
  HeaderContainer,
  LeftMenuContainer,
} from "./app-layout.style";

import LeftMenu from "./leftmenu";

import OverLay from "./overlay";

import SideBar from "components/Sidebar/Sidebar";

import SidebarMenu from "components/SidbarMenu/index";

type LayoutProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const onMenuClick = () => {
    setOpen(true);
  };

  const onOverLayClick = () => {
    setOpen(false);
  };
  return (
    <>
      <SidebarMenu open={open} onClose={onOverLayClick}></SidebarMenu>
      <HeaderContainer>
        <Header onMenuClick={onMenuClick} />
      </HeaderContainer>
      <LeftMenuContainer>
        <LeftMenu></LeftMenu>
      </LeftMenuContainer>
      <BodyContainer>{children}</BodyContainer>
      {open && <OverLay handleSide={onOverLayClick} />}
    </>
  );
};

export default Layout;
