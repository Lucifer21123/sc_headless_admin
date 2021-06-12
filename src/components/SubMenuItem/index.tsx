import { useState } from "react";

import {
  AdminSubMenuContainer,
  AdminSubMenuItem,
  AdminSubMenuLink,
  Icon,
  IconArrow,
  AdminMenuList,
  AdminMenuItem,
  AdminMenuLink,
} from "./index.style";

import { FiChevronDown } from "react-icons/fi";

const SubMenuItem = ({ hide, item, list, onClick, children }) => {
  const [itemShow, setitemShow] = useState(false);
  return (
    <AdminSubMenuItem>
      <AdminSubMenuLink
        hide={hide}
        onClick={() => {
          setitemShow(!itemShow);
        }}
      >
        <Icon>{children}</Icon>
        <span>{item}</span>
        <IconArrow hide={hide}>
          <FiChevronDown size={20} color="#315293"></FiChevronDown>
        </IconArrow>
      </AdminSubMenuLink>
      <AdminSubMenuContainer show={itemShow}>
        <AdminMenuList>
          {list.map((item, key) => {
            return (
              <AdminMenuItem>
                <AdminMenuLink hide={hide}>
                  <span>{item.label}</span>
                </AdminMenuLink>
              </AdminMenuItem>
            );
          })}
        </AdminMenuList>
      </AdminSubMenuContainer>
    </AdminSubMenuItem>
  );
};

export default SubMenuItem;
