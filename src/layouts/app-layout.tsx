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
    <LayoutWrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <LeftMenuContainer>
        <LeftMenu></LeftMenu>
      </LeftMenuContainer>
      <BodyContainer>{children}</BodyContainer>
      {open && <OverLay handleSide={onOverLayClick} />}
    </LayoutWrapper>
  );
};

export default Layout;
