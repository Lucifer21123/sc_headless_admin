import styled from "styled-components";
import ReadMoreReact from "read-more-react";
const SearchImgContainer = styled.div`
  margin-top: 10px;
  & img {
    width: 100%;
    margin-bottom: 10px;
  }

  & strong {
    color: #0b0212;
    font-weight: 500;
    font-size: 16px;
  }
  & .popular-info {
    display: flex;
    & .display-text-group {
      & .displayed-text {
        & span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipis;
          display: inline-block;
          width: calc(100-5px);
          color: #0b0212 !important;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 0;
        }
      }
    }
  }
`;

const SearchImg = ({ item }) => {
  console.log(item);
  return (
    <SearchImgContainer>
      <img src={item.popularImg} />
      <strong>50% of on all goods!</strong>
      <div className="popularinfo">
        <ReadMoreReact
          text={item.text}
          min={60}
          ideal={80}
          max={200}
          readMoreText="read more..."
        ></ReadMoreReact>
      </div>
    </SearchImgContainer>
  );
};

export default SearchImg;
