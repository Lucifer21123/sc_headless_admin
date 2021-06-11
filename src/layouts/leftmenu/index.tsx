import { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import {
  AdminMenuNav,
  MinimizeButtonContainer,
  AdminMenuWrap,
  AdminMenuList,
  AdminMenuItem,
  AdminSubMenuItem,
  AdminMenuLink,
  AdminSubMenuLink,
  AdminSubMenuContainer,
  Icon,
  IconArrow,
} from "./index.style";
import { FiMinimize2 } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
const LeftMenu = () => {
  const [hide, setHide] = useState(false);
  return (
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
      <AdminMenuWrap>
        <AdminMenuList>
          <AdminSubMenuItem>
            <AdminSubMenuLink hide={hide}>
              <Icon>
                <RiDashboardFill size={20} color="#315293"></RiDashboardFill>
              </Icon>
              <span>Dashboard</span>
              <IconArrow hide={hide}>
                <FiChevronDown size={20} color="#315293"></FiChevronDown>
              </IconArrow>
            </AdminSubMenuLink>
            <AdminSubMenuContainer>
              <AdminMenuList>
                <AdminMenuItem>
                  <AdminMenuLink hide={hide}>
                    <span>View Orders</span>
                  </AdminMenuLink>
                </AdminMenuItem>
              </AdminMenuList>
            </AdminSubMenuContainer>
          </AdminSubMenuItem>
        </AdminMenuList>
      </AdminMenuWrap>
    </AdminMenuNav>
  );
};

export default LeftMenu;
