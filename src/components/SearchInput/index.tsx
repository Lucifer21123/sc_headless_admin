import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";

type StyledProps = {
  Width: string;
  Height: string;
  BorderRadius: string;
  Padding: string;
  Border: string;
  BackgroundColor: string;
  Transition: string;
  ActiveBorder: string;
};

const SearchInputContent = styled.div<StyledProps>`
  position: relative;
  & input {
    width: ${(props) => props.Width};
    height: ${(props) => props.Height};
    border-radius: ${(props) => props.BorderRadius};
    padding: ${(props) => props.Padding};
    border: ${(props) => props.Border};
    background-color: ${(props) => props.BackgroundColor};
    transition: ${(props) => props.Transition};
    :active {
      border: 1px solid rgba(53, 85, 143, 0.5);
      outline: 0;
      box-shadow: 0 0 0;
      border: ${(props) => props.ActiveBorder};
    }
    :focus {
      border: 1px solid rgba(53, 85, 143, 0.5);
      outline: 0;
      box-shadow: 0 0 0;
      border: ${(props) => props.ActiveBorder};
    }
  }
  & .search-button {
    position: absolute;
    width: 40px;
    height: 100%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: 0 0;
    border: 0;
    text-decoration: none;
    outline: 0;
  }
`;
type ContainerProps = {
  hide: boolean;
};

const SeachContainer = styled.div<ContainerProps>`
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  max-width: inherit;
  z-index: 9999;
  box-shadow: 1px 1px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  padding: 30px 16px 16px;
  transition: 0.4s;
  overflow-y: scroll;
  overflow-anchor: none;
  touch-action: none;
  height: ${(props) => (props.hide == false ? "0" : "80vh")};
  transition: all 1s ease-in;
  display: ${(props) => (props.hide == false ? "none" : "block")};
`;

const SearchInput = ({
  Width = "100%",
  Height = "40px",
  BorderRadius = "5px",
  Padding = "9px 35px 9px 16px",
  Border = "1px solid transparent",
  BackgroundColor = "rgba(232,235,242,.3)",
  Transition = ".3s",
  ActiveBorder = "1px solid rgba(53,85,143,.5)",
  Placeholder = "Search for Something",
  None = true,
  onChange,
  onClick,
  children,
}) => {
  const [hide, setHide] = useState(false);
  const dropMenuRef = useRef(null);
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
    <SearchInputContent
      Width={Width}
      Height={Height}
      BorderRadius={BorderRadius}
      Padding={Padding}
      Border={Border}
      BackgroundColor={BackgroundColor}
      Transition={Transition}
      ActiveBorder={ActiveBorder}
    >
      <input
        onChange={(event) => {
          onChange(event);
          if (None != false) {
            setHide(true);
          }
        }}
        placeholder={Placeholder}
      />
      <button
        className="search-button"
        onClick={() => {
          onClick();
        }}
      >
        <HiSearch size={25} color="#315293"></HiSearch>
      </button>
      <SeachContainer hide={hide} ref={dropMenuRef} className="nft-scrollbar">
        {children}
      </SeachContainer>
    </SearchInputContent>
  );
};

export default SearchInput;
