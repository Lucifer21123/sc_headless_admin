import styled from "styled-components";

//! import Hashtag Item
import HashtagItem from "./hashtagitem";

const SearchHashtag = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & span {
    color: #828282;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.86px;
  }
`;

const Hashtags = ({ data }) => {
  return (
    <SearchHashtag>
      <span>hashtags</span>
      {data.map((item, key) => {
        return <HashtagItem key={key} item={item}></HashtagItem>;
      })}
    </SearchHashtag>
  );
};

export default Hashtags;
