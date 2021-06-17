import HoverText from "components/HoverText";
import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeft,
  HeaderLogo,
  HeaderBuger,
  HeaderSearch,
  HeaderRight,
  HeaderAdmin,
  HeaderUserSelect,
  UserSelect,
  HeaderDropDown,
  ButtonContainer,
  SearchContainer,
  PopularBottom,
  SnatchButtonContent,
} from "./header.style";

//! import settings

import {
  SearchProductData,
  SnatchButtonSetting,
  dropDownSettings,
  list,
} from "site-settings/site-setting/header/setting";

//!import logoIcon
import SplitcheckLogo from "assets/icons/splitcheck-w-logo.png";
import UserImage from "assets/images/layout/header/header-logo.png";

//! import buger image

import BugerImage from "assets/icons/burger-blue.svg";

//! import components
import SearchInput from "components/SearchInput";
import Dropdown from "components/Dropdown";
import { Button } from "components/Button";

import Hashtags from "components/Hashtags/index";
import SearchProduct from "components/SearchProduct/index";
import PopularItems from "components/SearchProductPopular/index";
import SnatchButton from "components/SnatchButton/index";

const onChange = (event) => {
  console.log(event);
};

const onSearchClick = () => {
  console.log("~~~search button click~~~~");
};

const onItemClick = (item) => {
  console.log(item);
};

const SnatchClick = () => {};

const Header = ({ onMenuClick, onBugerClick }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderBuger onClick={onBugerClick}>
            <img src={BugerImage}></img>
          </HeaderBuger>
          <HeaderLogo href="#">
            <img className="header_img" src={SplitcheckLogo} />
            <div className="logoText">
              <HoverText
                FontWeight="500"
                FontSize="16px"
                HoverColor="#315293"
                TextColor="#315293"
              >
                Manage Stores
              </HoverText>
            </div>
          </HeaderLogo>
        </HeaderLeft>

        <HeaderSearch>
          <SearchInput onChange={onChange} onClick={onSearchClick}>
            <SearchContainer>
              <Hashtags data={SearchProductData.hastags}></Hashtags>
              <SearchProduct data={SearchProductData.products}></SearchProduct>
              <PopularItems items={SearchProductData.populars}></PopularItems>
              <PopularBottom>
                <SnatchButtonContent>
                  <SnatchButton
                    onClick={SnatchClick}
                    setting={SnatchButtonSetting}
                  >
                    Snatch it!
                  </SnatchButton>
                </SnatchButtonContent>
                <a href="#" className="link-blue">
                  Show all results(999)
                </a>
              </PopularBottom>
            </SearchContainer>
          </SearchInput>
        </HeaderSearch>
        <HeaderRight>
          <HeaderAdmin
            onClick={() => {
              onMenuClick();
            }}
          >
            <span>AD</span>
          </HeaderAdmin>
          <HeaderUserSelect>
            <UserSelect>
              <img src={UserImage}></img>
            </UserSelect>
            <HeaderDropDown>
              <Dropdown
                settings={dropDownSettings}
                list={list}
                click={onItemClick}
                label="Genetix Nutrition"
              ></Dropdown>
            </HeaderDropDown>
          </HeaderUserSelect>
          <ButtonContainer>
            <Button variant="outlinedbitDarkBlue" size="small">
              Promote store
            </Button>
          </ButtonContainer>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
