import React from "react";

import styled from "styled-components";

export const OverLayWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: #f8f9fb !important;
  z-index: 9999;
  filter: blur(15px);
  transition: 0.3s;
`;

const OverLay = ({ handleSide }) => {
  return (
    <OverLayWrapper
      onClick={() => {
        handleSide();
      }}
    ></OverLayWrapper>
  );
};

export default OverLay;
