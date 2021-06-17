import { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  AdminMenuNav,
  MinimizeButtonContainer,
  AdminMenuWrap,
  AdminMenuList,
  AdminMenuContainer,
  CopyRight,
  AdminMenuClose,
  AdminMenuHeader,
  AdminMenuImg,
  AdminMenuLogo,
  AdminMenuUserSelect,
  UserSelect,
  UserSelectDropDown,
  UserSelectPhoto,
  AdminFooterFormList1,
  AdminFooterFormList2,
  AdminFooterFormWrap,
  AdminMenuFooter,
  SwitchButtonContainer,
} from "./index.style";

//!import Icons
import { FiMinimize2 } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import LogoImg from "assets/icons/splitcheck-w-logo.png";
import Avatar1 from "assets/images/layout/header/leftmenu/img-1.png";

//! import custom Hook
import { useWindowSize } from "utils/use-windowsize";

//! import components
import MenuItem from "components/MenuItem";
import SubMenuItem from "components/SubMenuItem";
import Dropdown from "components/Dropdown/index";
import SwitchButton from "components/SwitchButton/index";

//!import settings
import {
  MenuData,
  dropDownSettings,
} from "site-settings/site-setting/leftmenu/setting";

import { list } from "site-settings/site-setting/header/setting";

const LeftMenu = ({ leftMenuOpen, closeButtonClick }) => {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);

  const [hide, setHide] = useState(false);
  const [currentHeight, setHeight] = useState(0);
  const [leftMenuHeight, setLeftMenuHeight] = useState("auto");
  const [overflowflag, setOverflow] = useState(false);

  const leftMenuRef = useRef(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    let leftMenuHeight = leftMenuRef.current.offsetHeight;
    if (height < leftMenuHeight) {
      setLeftMenuHeight(height - 89 - 50 + "px");
      setOverflow(true);
    } else {
      setLeftMenuHeight("auto");
      setOverflow(false);
    }
    setHeight(height);
  }, [leftMenuRef]);

  useEffect(() => {
    if (height < currentHeight) {
      setLeftMenuHeight(height - 89 - 50 + "px");
      setOverflow(true);
    } else {
      setLeftMenuHeight("auto");
      setOverflow(false);
    }
  }, [height]);

  const onClickSubItem = (itemshow, flag) => {
    if (flag == "minimize") {
      setHide(!hide);
    }

    let leftMenuHeight = leftMenuRef.current.offsetHeight;
    if (height - 89 - 80 < leftMenuHeight) {
      setLeftMenuHeight(height - 89 - 50 + "px");
      setOverflow(true);
    }

    setHeight(height);
  };

  const onItemClick = () => {};

  const onSwitchChange1 = (item) => {
    setSwitch1(item);
  };
  const onSwitchChange2 = (item) => {
    setSwitch2(item);
  };

  return (
    <>
      <AdminMenuHeader leftMenuOpen={leftMenuOpen}>
        <AdminMenuClose onClick={closeButtonClick}>
          <AiOutlineClose size={20} color="#335491"></AiOutlineClose>
        </AdminMenuClose>
        <AdminMenuLogo>
          <AdminMenuImg>
            <img src={LogoImg} />
          </AdminMenuImg>
          <span>Manage stores</span>
        </AdminMenuLogo>
      </AdminMenuHeader>
      <AdminMenuContainer leftMenuOpen={leftMenuOpen}>
        <AdminMenuNav hide={hide} ref={leftMenuRef}>
          <MinimizeButtonContainer
            onClick={() => {
              setHide(!hide);
            }}
          >
            {hide ? (
              <BiChevronRight size={20} color="#315293"></BiChevronRight>
            ) : (
              <FiMinimize2 size={20} color="#315293"></FiMinimize2>
            )}
          </MinimizeButtonContainer>
          <AdminMenuUserSelect leftMenuOpen={leftMenuOpen}>
            <UserSelect>
              <UserSelectPhoto>
                <img src={Avatar1} />
              </UserSelectPhoto>
              <UserSelectDropDown>
                <Dropdown
                  settings={dropDownSettings}
                  list={list}
                  click={onItemClick}
                  label="Genetix Nutrition"
                ></Dropdown>
              </UserSelectDropDown>
            </UserSelect>
          </AdminMenuUserSelect>
          <AdminMenuWrap
            overflowflag={overflowflag}
            height={leftMenuHeight}
            className="nft-scrollbar"
          >
            <AdminMenuList>
              {MenuData.map((item, key) => {
                return item.type == "menuItem" ? (
                  <MenuItem key={key} hide={hide} item={item.label}>
                    {item.icon}
                  </MenuItem>
                ) : (
                  <SubMenuItem
                    key={key}
                    onClick={onClickSubItem}
                    hide={hide}
                    item={item.label}
                    list={item.list}
                  >
                    {item.icon}
                  </SubMenuItem>
                );
              })}
            </AdminMenuList>
            {leftMenuOpen ? (
              <>
                <AdminMenuFooter>
                  <AdminFooterFormWrap>
                    <AdminFooterFormList1 switch1={switch1}>
                      <SwitchButtonContainer>
                        <SwitchButton onChange={onSwitchChange1}></SwitchButton>
                      </SwitchButtonContainer>
                      <b>Alert me when new message arrive</b>
                    </AdminFooterFormList1>
                  </AdminFooterFormWrap>
                  <AdminFooterFormWrap>
                    <AdminFooterFormList2 switch2={switch2}>
                      <SwitchButtonContainer>
                        <SwitchButton onChange={onSwitchChange2}></SwitchButton>
                      </SwitchButtonContainer>
                      <b>Alert me when shoppers visits my store</b>
                    </AdminFooterFormList2>
                  </AdminFooterFormWrap>
                </AdminMenuFooter>
                <CopyRight hide={hide}>
                  <span>All rights reserved SplitchChek 2020</span>
                </CopyRight>
              </>
            ) : (
              <></>
            )}
          </AdminMenuWrap>
        </AdminMenuNav>

        {!leftMenuOpen ? (
          <CopyRight hide={hide}>
            <span>All rights reserved SplitchChek 2020</span>
          </CopyRight>
        ) : (
          <></>
        )}
      </AdminMenuContainer>
    </>
  );
};

export default LeftMenu;
