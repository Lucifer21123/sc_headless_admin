//!import productImage

import ProductImg1 from "assets/images/Product/viewProduct/7142447382608.png";
import PopularImg from "assets/images/Product/viewProduct/car.jpg";

export const dropDownSettings = {
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

export const list = [
  {
    id: "Terry Smith",
    label: "Terry Smith",
  },
  {
    id: "Terry will Green",
    label: "Terry will Green",
  },
];

export const SearchProductData = {
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
export const SnatchButtonSetting = {
  width: "100%",
  height: "40px",
  fontSize: "16px",
  radius: "5px",
  bg: "#d36a00",
  hoverColor: "#d36a00",
  fontColor: "white",
  borderColor: "#c66300",
};
