import styled from "styled-components";
import { useState } from "react";
import CheckBox from "components/CustomCheckBox";

const SelectItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 8px;
  position: relative;
  cursor: pointer;
`;

type ItemPhotoProps = {
  image: string;
};

const SelectItemPhototContent = styled.div<ItemPhotoProps>`
  min-width: 56px;
  max-width: 56px;
  height: 56px;
  background-color: #f4f8ff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 12px;
  border-radius: 5px;
  background-image: url(${(props) => props.image});
`;

const SelectInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  & strong {
    color: #0b0212;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.64px;
    line-height: 18px;
    text-align: left;
    margin-bottom: 12px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 276px;
  }
`;

const SelectInfoUl = styled.ul`
  display: flex;
  align-items: center;
  & li {
    color: #0b0212;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    margin-right: 18px;
  }
  :last-of-type span {
    color: #828282 !important;
  }
`;

const CheckBoxContent = styled.div`
  position: absolute;
  right: 35px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const SelectPageItem = ({ item, onClick,checked }) => {
  const onCheckBoxClick = (checked_h) => {
    onClick(item.id,checked_h);
  };
  return (
    <SelectItemContainer>
      <SelectItemPhototContent image={item.image}></SelectItemPhototContent>
      <SelectInfo>
        <strong>{item.title}</strong>
        <SelectInfoUl>
          <li>
            ID: <span>{item.id}</span>
          </li>
          <li>
            <span>{item.date}</span>
          </li>
        </SelectInfoUl>
      </SelectInfo>
      <CheckBoxContent>
        <CheckBox
          checked={checked}
          border="#afbbd4"
          activeBorder={"#f77d0e"}
          onClick={onCheckBoxClick}
        ></CheckBox>
      </CheckBoxContent>
    </SelectItemContainer>
  );
};
export default SelectPageItem;
