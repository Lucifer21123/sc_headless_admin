import React, { useReducer } from "react";
import { LayoutContext } from "./layout.context";
const INITIAL_STATE = {
  pageLayout: "default",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "Product":
      return {
        ...state,
        pageLayout: "Product",
      };
    case "default":
      return {
        ...state,
        pageLayout: "default",
      };
    default:
      return state;
  }
}
export const LayoutProvider: React.FunctionComponent = ({ children }) => {
  const [layoutState, layoutDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <LayoutContext.Provider value={{ layoutState, layoutDispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
