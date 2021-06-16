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

//!import productImage

import ProductImg1 from "assets/images/Product/viewProduct/7142447382608.png";
import PopularImg from "assets/images/Product/viewProduct/car.jpg";

//!import logoIcon
import SplitcheckLogo from "assets/icons/splitcheck-w-logo.png";
import UserImage from "assets/images/layout/header/header-logo.png";

//! import bugerimage

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

const SearchProductData = {
  hastags: [
    {
      title: "#esomething",
      description: "Some short headline there",
    },
    {
      title: "#esomething",
      description: "Some short headline there",
    },
  ],
  products: [
    {
      productSrc: ProductImg1,
      title: "Short title could be here;could even be a bit longer one",
      price: "$45.00",
    },
    {
      productSrc: ProductImg1,
      title: "Short title could be here;could even be a bit longer one",
      price: "$45.00",
    },
  ],
  populars: {
    popularItems: [
      {
        title: "energy",
      },
      {
        title: "echinacea",
      },
      {
        title: "endurance",
      },
    ],
    popularImg: {
      popularImg: PopularImg,
      text: "To help your skin thrive, use Moroccan argan extract which conditions and moisturiz",
    },
  },
};
const SnatchButtonSetting = {
  width: "100%",
  height: "40px",
  fontSize: "16px",
  radius: "5px",
  bg: "#d36a00",
  hoverColor: "#d36a00",
  fontColor: "white",
  borderColor: "#c66300",
};

const SnatchClick = () => {
  console.log("Snatch Button Click");
};

const Header = ({ onMenuClick }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderBuger>
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
