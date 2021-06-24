import React, { useState, useEffect } from "react";
import Header from "./header/header";

import { useRouter } from "next/router";

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

import { themeSetting } from "site-settings/site-theme/theme.setting";

import { useWindowSize } from "utils/use-windowsize";
import { useScrollPosition } from "utils/use-scroll";

//! import Layout context
import { LayoutContext } from "contexts/layout/layout.context";


//! import IsEmtpy.

import isEmpty from "utils/is-empty";

type LayoutProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  //!define Hooks
  const [open, setOpen] = useState(false);
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [scrollPositionTop, setScrollPosition] = useState(0);
  const [leftPosition, setLeftMenuPosition] = useState("92px");
  const [headerTransform, setTransform] = useState("0");
  const [myRef, setmyRef] = useState(null);
  const [top, bottom] = useScrollPosition();

  //!catch Path for theme
  const { pathname } = useRouter();
  const {
    layoutDispatch,
    layoutState: { pageLayout },
  } = React.useContext<any>(LayoutContext);
  useEffect(() => {
    let urls = themeSetting;
    const current = urls.filter((item) => {
      return pathname.indexOf(item.path) != -1;
    });

    if (!isEmpty(current)) {
      layoutDispatch({ type: current[0].theme });
    }
  }, [pathname]);

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
      {pageLayout == "default" ? (
        <>
          <LeftMenuContainer
            position={leftPosition}
            leftMenuOpen={leftMenuOpen}
          >
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
      ) : (
        <BodyContainer>{children}</BodyContainer>
      )}
    </>
  );
};

export default Layout;
