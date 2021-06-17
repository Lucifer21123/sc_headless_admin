import React, { useState, useEffect } from "react";
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

import { useWindowSize } from "utils/use-windowsize";
import { useScrollPosition } from "utils/use-scroll";

type LayoutProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [scrollPositionTop, setScrollPosition] = useState(0);
  const [leftPosition, setLeftMenuPosition] = useState("92px");
  const [headerTransform, setTransform] = useState("0");
  const [myRef, setmyRef] = useState(null);

  const [top, bottom] = useScrollPosition();

  useEffect(() => {
    if (scrollPositionTop - bottom < 0) {
      if (leftPosition == "10px" && headerTransform == "-100%") {
        return;
      }
      setLeftMenuPosition("10px");
      setTransform("-100%");
    } else {
      if (leftPosition == "92px" && headerTransform == "0") {
        return;
      }
      setLeftMenuPosition("92px");
      setTransform("0");
    }
    setScrollPosition(bottom);
  }, [bottom]);

  const onMenuClick = () => {
    setOpen(true);
  };

  const onOverLayClick = () => {
    setOpen(false);
  };
  const onScroll = () => {};
  const onBugerClick = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };
  const closeButtonClick = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };
  return (
    <>
      <SidebarMenu open={open} onClose={onOverLayClick}></SidebarMenu>
      <HeaderContainer transform={headerTransform}>
        <Header onMenuClick={onMenuClick} onBugerClick={onBugerClick} />
      </HeaderContainer>
      <LeftMenuContainer position={leftPosition} leftMenuOpen={leftMenuOpen}>
        <LeftMenu
          leftMenuOpen={leftMenuOpen}
          closeButtonClick={closeButtonClick}
        ></LeftMenu>
      </LeftMenuContainer>
      <BodyContainer ref={myRef} onScroll={onScroll}>
        <div className="wrapper">
          <div className="main-content">{children}</div>
        </div>
      </BodyContainer>
      {open && <OverLay handleSide={onOverLayClick} />}
    </>
  );
};

export default Layout;
