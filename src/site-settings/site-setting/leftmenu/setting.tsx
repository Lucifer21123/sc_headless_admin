//! icons

import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiGift } from "react-icons/hi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BiStoreAlt } from "react-icons/bi";
import { BsPhoneLandscape } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

import {
  DashBoardIcon,
  NotificationIcon,
  MessageIcon,
  ShippingIcon,
  NetworkingIcon,
  GroupIcon,
  LadingPageIcon,
  GiftIcon,
  MegaPhoneIcon,
  ShopIcon,
} from "components/icons/index";

export const MenuData = [
  {
    type: "menuItem",
    icon: <DashBoardIcon></DashBoardIcon>,
    label: "Dashboard",
    href: "#",
  },
  {
    type: "menuItem",
    icon: <NotificationIcon></NotificationIcon>,
    label: "Alerts(2)",
    href: "#",
  },
  {
    type: "menuItem",
    icon: <MessageIcon></MessageIcon>,
    label: "Trading room",
    href: "#",
  },
  {
    type: "SubMenuItem",
    icon: <ShippingIcon></ShippingIcon>,
    label: "Orders",
    href: "#",
    list: [
      {
        label: "View orders",
        href: "#",
      },
      {
        label: "Abandoned cart",
        href: "#",
      },
      {
        label: "Items in wishlist",
        href: "#",
      },
      {
        label: "Shop for your store",
        href: "#",
      },
    ],
  },
  {
    type: "SubMenuItem",
    icon: <NetworkingIcon></NetworkingIcon>,
    label: "Networking",
    href: "#",
    list: [
      {
        label: "View orders",
        href: "#",
      },
    ],
  },
  {
    type: "SubMenuItem",
    icon: <GroupIcon></GroupIcon>,
    label: "Posts",
    href: "#",
    list: [
      {
        label: "View orders",
        href: "#",
      },
    ],
  },
  {
    type: "SubMenuItem",
    icon: <LadingPageIcon></LadingPageIcon>,
    label: "Landing Pages",
    href: "#",
    list: [
      {
        label: "View orders",
        href: "#",
      },
    ],
  },
  {
    type: "SubMenuItem",
    icon: <GiftIcon></GiftIcon>,
    label: "Products",
    href: "#",
    list: [
      {
        label: "View products",
        href: "#",
      },
      {
        label: "Inventory",
        href: "#",
      },
      {
        label: "View seasonal",
        href: "#",
      },
      {
        label: "Create Product",
        href: "#",
      },
    ],
  },
  {
    type: "SubMenuItem",
    icon: <MegaPhoneIcon></MegaPhoneIcon>,
    label: "Marketing",
    href: "#",
    list: [
      {
        label: "View orders",
        href: "#",
      },
    ],
  },
  {
    type: "My stores",
    icon: <ShopIcon></ShopIcon>,
    label: "My stores",
    href: "#",
    list: [
      {
        label: "View orders",
        href: "#",
      },
    ],
  },
];

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
