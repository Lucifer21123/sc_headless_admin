import styled from "styled-components";
import { useState } from "react";

const SelectedItem = styled.div`
  display: flex;
  marin-bottom: 4px;
  justify-content: center;
  align-items: center;
  height: 72px;
  box-shadow: 2px 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  padding: 0 12px 0 0;
  flex: 1;
`;

const SelectedLeft = styled.div`
  display: flex;
  align-items: center;
  & .selected-Item-photo {
    min-width: 72px;
    max-width: 72px;
    height: 72px;
    background-color: #f4f8ff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 12px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  & .selected-item-info {
    display: flex;
    flex-direction: column;
    & strong {
      opacity: 0.75;
      color: #0b0212;
      font-weight: 500;
      font-size: 18px;
      font-style: normal;
      letter-spacing: 0.64px;
      line-height: 18px;
      text-align: left;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 276px;
      margin-bottom: 10px;
    }
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

const SelectedRight = styled.div`
  justify-content: flex-start;
  & span {
    cusor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    color: #335491;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: right;
    text-decoration: underline;
  }
`;

const SelectedPageItem = ({ item, onClick }) => {
  return (
    <SelectedItem>
      <SelectedLeft>
        <div className="selected-Item-photo">
          <img src={item.image} />
        </div>
        <div className="selected-item-info">
          <strong>{item.title}</strong>
          <SelectInfoUl>
            <li>
              ID: <span>{item.id}</span>
            </li>
            <li>
              <span>{item.date}</span>
            </li>
          </SelectInfoUl>
        </div>
      </SelectedLeft>
      <SelectedRight>
        <span
          onClick={() => {
            onClick(item.id);
          }}
        >
          Delete
        </span>
      </SelectedRight>
    </SelectedItem>
  );
};

export default SelectedPageItem;
