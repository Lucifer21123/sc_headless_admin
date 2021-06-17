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

export const MenuData = [
  {
    type: "menuItem",
    icon: <RiDashboardFill size={20} color="#315293"></RiDashboardFill>,
    label: "Dashboard",
    href: "#",
  },
  {
    type: "menuItem",
    icon: (
      <IoMdNotificationsOutline
        size={20}
        color="#315293"
      ></IoMdNotificationsOutline>
    ),
    label: "Alerts(2)",
    href: "#",
  },
  {
    type: "menuItem",
    icon: <FiMail size={20} color="#315293"></FiMail>,
    label: "Trading room",
    href: "#",
  },
  {
    type: "SubMenuItem",
    icon: <MdLocalShipping size={20} color="#315293"></MdLocalShipping>,
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
    icon: <FaNetworkWired size={20} color="#315293"></FaNetworkWired>,
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
    icon: <HiOutlineUserGroup size={20} color="#315293"></HiOutlineUserGroup>,
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
    icon: <BsPhoneLandscape size={20} color="#315293"></BsPhoneLandscape>,
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
    icon: <HiGift size={20} color="#315293"></HiGift>,
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
    icon: <IoMegaphoneOutline size={20} color="#315293"></IoMegaphoneOutline>,
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
    icon: <BiStoreAlt size={20} color="#315293"></BiStoreAlt>,
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
