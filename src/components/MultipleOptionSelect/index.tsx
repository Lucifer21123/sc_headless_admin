import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";

import styled from "styled-components";

const MultiSelectContainer = styled.div`
  & .multiselect-container {
    & .search-wrapper {
      border: none;
    }
    & .optionListContainer {
      box-shadow: 1px 1px 4px 1px rgb(11 2 18 / 8%);
      padding: 8px 0;
      margin-top: 10px;
      border: 0;
      border-radius: 8px;
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
      & .optionContainer {
        & li {
          :hover {
            background-color: #f8f9fb;
          }
        }
      }
    }
  }
`;

const data = [
  {
    key: "Organic",
    option: "Organic",
  },
  {
    key: "Gluten Free",
    option: "Gluten Free",
  },
];

const MultipleOptionSelect = ({}) => {
  const [options, setstate] = useState(data);
  const style = {
    chips: {
      background: "#4fcec4",
      color: "white",
      fontSize: "14px",
      borderRadius: "5px !important",
      padding: "5px 10px 5px 12px",
      "margin-top": "8px !important",
      "margin-right": "8px !important",
      display: "inline-flex !important",
      gap: "10px",
    },
    searchBox: {
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      border: "1px solid rgba(53, 85, 143, 0.5)",
      background: "#f8f9fb",
      padding: "5px 16px",
    },
    option: {
      background: "white",
      color: "#335491",
    },
    optionContainer: {
      // To change css for option container
      marginTop: "10px",
      border: "none",
    },
  };
  return (
    <MultiSelectContainer>
      <Multiselect
        options={options}
        displayValue="key"
        style={style}
        closeIcon="close"
      ></Multiselect>
    </MultiSelectContainer>
  );
};

export default MultipleOptionSelect;
