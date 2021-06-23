import styled from "styled-components";
import { useState } from "react";
type ToggleTransition = {
  hide: boolean;
  transitionTime: string;
};
const ToggleTransitionCotainer = styled.div<ToggleTransition>`
  display: block;
  overflow: hidden;
  height: ${(props) => (props.hide ? "0" : "auto")};
  opacity: ${(props) => (props.hide ? "0" : "1")};
  overflow: hidden;
  transition: all ${(props) => props.transitionTime};
  padding-top: 12px;
`;

const ToggleTransition = ({ hide, transitionTime, children }) => {
  return (
    <ToggleTransitionCotainer hide={hide} transitionTime={transitionTime}>
      {children}
    </ToggleTransitionCotainer>
  );
};

export default ToggleTransition;
