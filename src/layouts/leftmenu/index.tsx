import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import {
  AdminMenuNav,
  MinimizeButtonContainer,
  AdminMenuWrap,
  AdminMenuList,
  AdminMenuContainer,
  CopyRight,
} from "./index.style";

//! import custom Hook
import { useWindowSize } from "utils/use-windowsize";
import { useScrollPosition } from "utils/use-scroll";
//! icons
import { FiMinimize2 } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiGift } from "react-icons/hi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BiStoreAlt } from "react-icons/bi";
import { BsPhoneLandscape } from "react-icons/bs";

//! import components
import MenuItem from "components/MenuItem";
import SubMenuItem from "components/SubMenuItem";

const MenuData = [
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

const LeftMenu = () => {
  const [hide, setHide] = useState(false);
  const [currentHeight, setHeight] = useState(0);
  const [leftMenuHeight, setLeftMenuHeight] = useState("auto");
  const [overflowflag, setOverflow] = useState(false);

  const leftMenuRef = useRef(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    let height = leftMenuRef.current.offsetHeight;
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

  const onClickSubItem = () => {
    setHide(!hide);
  };

  return (
    <AdminMenuContainer ref={leftMenuRef}>
      <AdminMenuNav hide={hide}>
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
        <AdminMenuWrap overflowflag={overflowflag} height={leftMenuHeight}>
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
        </AdminMenuWrap>
      </AdminMenuNav>
      <CopyRight hide={hide}>
        <span>All rights reserved SplitchChek 2020</span>
      </CopyRight>
    </AdminMenuContainer>
  );
};

export default LeftMenu;
