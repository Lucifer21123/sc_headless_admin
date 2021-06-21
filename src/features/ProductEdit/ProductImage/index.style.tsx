import styled from "styled-components";
import Add24 from "assets/icons/add-24px.svg";
export const ImagesBoxLoader = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;

  flex: 1;
  & strong {
    color: #335491;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.8px;
    line-height: 12px;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

export const ColumnSortDrag = styled.ul`
  & li :first-of-type {
    min-width: 156px;
    max-height: 156px;
    height: 156px;
    float: left;
    margin-bottom: 0;
    border-radius: 5px;
    margin-right: 12px;
  }
`;

type SortableDragImgProps = {
  backgroundImg: any;
};

export const SortableDragImg = styled.li<SortableDragImgProps>`
  background-image: none;
  background-color: #f8f9fb;
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  min-width: 72px;
  max-width: 72px;
  height: 72px;
  background-image: url(${(props) =>
    props.backgroundImg !== "" ? props.backgroundImg : Add24});
  background-position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 12px;
  margin-bottom: 4px;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
`;
