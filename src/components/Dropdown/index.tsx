import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
const StyledDropDown = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type HeaderProps = {
  fontSize: string;
  fontWeight: string;
  color: string;
  hover: string;
};

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  magin-right: 10px;
`;

const StyledDropDownHeader = styled.div<HeaderProps>`
  cursor: pointer;
  width: 100%;
  span {
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
  }
  text-align: left;
  display: flex;
  align-items: baseline;
  :hover {
    color: ${(props) => props.hover};
  }
`;

type DropdownDivProps = {
  backgroundColor: string;
  borderRadius: string;
  boxShadow: string;
  arrowTop: string;
  arrowRight: string;

  hide: boolean;
};

const StyledDropDownDiv = styled.div<DropdownDivProps>`
  padding: 12px 10px;
  background: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  z-index: 999;
  position: absolute;
  width: 100%;
  min-width: 147px;
  top: ${(props) => props.arrowTop};
  right: ${(props) => props.arrowRight};
  display: ${(props) => (props.hide ? "block" : "none")};
  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 32px;
    margin-left: -7px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    & li {
      width: 100%;
      padding: 4px;
      cursor: pointer;
    }
  }
`;

type ItemProps = {
  itemFontSize: string;
  itemFontColor: string;
  itemFontWeight: string;
  hoverBackgroundColor: string;
  hoverColor: string;
};

const DropdownItemDiv = styled.div<ItemProps>`
  text-align: left;
  font-size: ${(props) => props.itemFontSize};
  font-weight: ${(props) => props.itemFontWeight};
  color: ${(props) => props.itemFontColor};
  width: 100%;
  :hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
  }
`;

type currentType = {
  id: string;
  label: string;
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

const Dropdown = ({ settings, list, label, click }) => {
  const [current, setCurrent] = useState<currentType>({
    id: label,
    label: label,
  });
  const [hide, setHide] = useState(false);
  const dropMenuRef = useRef(null);

  useEffect(() => {
    setCurrent({ id: label, label: label });
  }, []);

  const handleClickOutside = (e) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setHide(false);
  };

  useEffect(() => {
    if (hide) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hide]);

  return (
    <StyledDropDown>
      <StyledDropDownHeader
        fontSize={settings.fontSize}
        fontWeight={settings.fontWeight}
        color={settings.headerColor}
        hover={settings.hoverColor}
        onClick={() => {
          setHide(!hide);
        }}
      >
        <ArrowContainer>
          <span>{current.label}</span>
          <BiChevronDown size={20} color={settings.headerColor}></BiChevronDown>
        </ArrowContainer>
      </StyledDropDownHeader>
      <StyledDropDownDiv
        backgroundColor={settings.backgroundColor}
        borderRadius={settings.borderRadius}
        boxShadow={settings.boxShadow}
        arrowTop={settings.arrowTop}
        arrowRight={settings.arrowRight}
        hide={hide}
        ref={dropMenuRef}
      >
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <DropdownItemDiv
                  itemFontSize={settings.itemFontSize}
                  itemFontColor={settings.itemFontColor}
                  itemFontWeight={settings.itemFontWeight}
                  hoverBackgroundColor={settings.hoverBackgroundColor}
                  hoverColor={settings.hoverColor}
                  onClick={(e) => {
                    console.log("headertytytclick");
                    setHide(!hide);
                    setCurrent(item);
                    click(item);
                  }}
                >
                  {item.label}
                </DropdownItemDiv>
              </li>
            );
          })}
        </ul>
      </StyledDropDownDiv>
    </StyledDropDown>
  );
};

export default Dropdown;
