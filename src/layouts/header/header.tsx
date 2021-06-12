import HoverText from "components/HoverText";
import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderSearch,
  HeaderRight,
  HeaderAdmin,
  HeaderUserSelect,
  UserSelect,
  HeaderDropDown,
  ButtonContainer,
} from "./header.style";

//!import logoIcon
import SplitcheckLogo from "assets/icons/splitcheck-w-logo.png";
import UserImage from "assets/images/layout/header/header-logo.png";

//! import components
import SearchInput from "components/SearchInput";
import Dropdown from "components/Dropdown";
import { Button } from "components/Button";

const onChange = (event) => {
  console.log(event);
};

const onSearchClick = () => {
  console.log("~~~search button click~~~~");
};
/**
 * ! settings 
  fontSize: string;
  fontWeight: string;
  color: string;
  headerColor: string;
  backgroundColor: string;
  borderRadius: string;
  boxShadow: string;
  arrowTop: string;
  arrowRight: string;
  itemFontSize: string;
  itemFontColor: string;
  itemFontWeight: string;
  hoverBackgroundColor: string;
  hoverColor: string;
 * 
 */
const dropDownSettings = {
  fontSize: "18px",
  fontWeight: "500",
  color: "#212529",
  headerColor: "#315293",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "1px 1px 4px 1px rgb(11 2 18 / 8%)",
  arrowTop: "45px",
  arrowRight: "0",
  itemFontSize: "16px",
  itemFontColor: "#212529",
  itemFontWeight: "normal",
  hoverBackgroundColor: "#f8f9fb",
  hoverColor: "#335491",
};

const list = [
  {
    id: "Terry Smith",
    label: "Terry Smith",
  },
  {
    id: "Terry will Green",
    label: "Terry will Green",
  },
];

const onItemClick = (item) => {
  console.log(item);
};

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo href="#">
          <img className="header_img" src={SplitcheckLogo} />
          <HoverText
            FontWeight="500"
            FontSize="16px"
            HoverColor="#315293"
            TextColor="#315293"
          >
            Manage stores
          </HoverText>
        </HeaderLogo>
        <HeaderSearch>
          <SearchInput onChange={onChange} onClick={onSearchClick}>
            <div>123</div>
          </SearchInput>
        </HeaderSearch>
        <HeaderRight>
          <HeaderAdmin>
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
                label="Gnetix Nutrition"
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
