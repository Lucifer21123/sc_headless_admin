import { useState } from "react";

import {
  AdminSubMenuContainer,
  AdminSubMenuItem,
  AdminSubMenuLink,
  CustomIcon,
  IconArrow,
  AdminMenuList,
  AdminMenuItem,
  AdminMenuLink,
} from "./index.style";

import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

const SubMenuItem = ({ hide, item, list, onClick, children }) => {
  const [itemShow, setitemShow] = useState(false);
  return (
    <AdminSubMenuItem>
      <AdminSubMenuLink
        hide={hide}
        onClick={() => {
          if (itemShow == false && hide == true) {
            onClick(!itemShow, "minimize");
          } else {
            onClick(!itemShow, "unminimize");
          }
          setitemShow(!itemShow);
        }}
      >
        <CustomIcon>{children}</CustomIcon>
        <span>{item}</span>
        {itemShow ? (
          <IconArrow hide={hide}>
            <FiChevronUp size={15} color="#315293"></FiChevronUp>
          </IconArrow>
        ) : (
          <IconArrow hide={hide}>
            <FiChevronDown size={15} color="#315293"></FiChevronDown>
          </IconArrow>
        )}
      </AdminSubMenuLink>
      <AdminSubMenuContainer
        show={hide ? false && setitemShow(!itemShow) : itemShow}
      >
        <AdminMenuList>
          {list.map((item, key) => {
            return (
              <AdminMenuItem key={key}>
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
