import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import commentImage from "assets/images/home/image14.png";

import likeSvg from "assets/images/Product/viewProduct/like.svg";
import heartSvg from "assets/images/Product/viewProduct/heart.svg";
import joySvg from "assets/images/Product/viewProduct/joy.svg";
import wowSvg from "assets/images/Product/viewProduct/wow.svg";
import angrySvg from "assets/images/Product/viewProduct/angry.svg";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CommentNumberImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  margin-bottom: 4px;

  & ul {
    display: flex;
    margin-right: 8px;
    cursor: pointer;
    & li {
      position: relative;
      width: 20px;
      height: 20px;
      padding-left: 0;
      margin-right: -4px;
      & img {
        min-width: 20px;
        max-width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
        top: 0;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }
    }
  }
  & p {
    padding-top: 2px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #36558f;
    margin-left: 6px;
    margin-bottom: 0px;
  }
`;

export const CommentImageArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767.98px) {
    flex-direction: row;
  }
`;

export const CommentText = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767.98px) {
    margin-left: 5px;
    margin-bottom: 3px;
  }
  text-align: right;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #7a8698;
`;

type StyledNoneActiveProps = {
  hide: boolean;
};

export const CommentReactionContainer = styled.div<StyledNoneActiveProps>`
  padding: 12px 10px;
  background: #ffffff;

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: absolute;
  z-index: 110;
  top: 28px;
  left: -10px;
  margin-right: -60px;

  display: ${({ hide }) => (hide ? "block" : "none")};

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 32px;
    margin-left: -7px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }

  & ul {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & li {
      margin-left: 8px;
    }
  }
`;

export const EmotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    min-width: 20px;
    height: 20px;
    margin-bottom: 4px;
  }
  & p {
    font-weight: 500;
    color: #434343;
    margin-bottom: 4px;
  }
  & span {
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    color: #434343;
  }
`;

const Emotion = ({ src, title, number }) => {
  return (
    <EmotionContainer>
      <img src={src}></img>
      <p>{title}</p>
      <span>{number}</span>
    </EmotionContainer>
  );
};

const Reaction = ({ comments }) => {
  const [hide, setHide] = useState(false);
  return (
    <CommentImageArea>
      <CommentNumberImage>
        <ul
          onMouseEnter={() => setHide(!hide)}
          onMouseLeave={() => setHide(!hide)}
        >
          <li>
            <img src={likeSvg} />
          </li>
          <li>
            <img src={heartSvg} />
          </li>
          <li>
            <img src={joySvg} />
          </li>
          <li>
            <img src={wowSvg} />
          </li>
          <li>
            <img src={angrySvg} />
          </li>
        </ul>
        <p>{comments.comments}</p>
      </CommentNumberImage>
      <CommentText>Comments {comments.comments}</CommentText>
      <CommentReactionContainer hide={hide}>
        <ul>
          <li>
            <Emotion
              src={likeSvg}
              title="like"
              number={comments.like}
            ></Emotion>
          </li>
          <li>
            <Emotion
              src={heartSvg}
              title="Love"
              number={comments.love}
            ></Emotion>
          </li>
          <li>
            <Emotion src={joySvg} title="joy" number={comments.haha}></Emotion>
          </li>
          <li>
            <Emotion src={wowSvg} title="wow" number={comments.wow}></Emotion>
          </li>
          <li>
            <Emotion
              src={angrySvg}
              title="angry"
              number={comments.angry}
            ></Emotion>
          </li>
        </ul>
      </CommentReactionContainer>
    </CommentImageArea>
  );
};

export default Reaction;
