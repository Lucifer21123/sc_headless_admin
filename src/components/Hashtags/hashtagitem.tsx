import styled from "styled-components";

const HashtagItemContainer = styled.div`
  padding-top: 8px;
  height: 56px;
  position: relative;
  z-index: 999;
  cursor: pointer;
  color: #0b0212;
  & h6 {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 0px;
  }

  & p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0px;
  }
  :hover {
    background-color: #f8f9fb;
    color: #335491 !important;
  }
`;

const HashtagItem = ({ item }) => {
  return (
    <HashtagItemContainer>
      <h6>{item.title}</h6>
      <p>{item.description}</p>
    </HashtagItemContainer>
  );
};

export default HashtagItem;
