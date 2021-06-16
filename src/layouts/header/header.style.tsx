import styled from "styled-components";

export const HeaderWrapper = styled.header`
  text-transform: capitalize;
  background: white;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 200px;
    flex: 0 0 200px;
    margin-right: 19px;
  }
  @media screen and (max-width: 1199px) {
    max-width: 300px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

export const HeaderBuger = styled.div`
  margin-right: 15px;
  margin-top: -5px;
  & img {
    min-width: 24px;
    height: 24px;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  :hover {
    outline: 0;
    text-decoration: none;
  }
  & .header_img {
    max-width: 34px;
    margin-right: 16px;
    @media screen and (max-width: 996px) {
      max-width: 24px;
      margin-right: 0;
    }
  }
  & .logoText {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const HeaderSearch = styled.div`
  width: 100%;
  margin-left: 0px;
  max-width: 670px;
  margin-right: 7px;
  margin-left: 7px;
  @media (min-width: 992px) {
    margin-right: 24px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-start;
  @media (min-width: 992px) {
    width: 450px;
    flex: 0 0 450px;
  }
`;

export const HeaderAdmin = styled.div`
  min-width: 40px;
  height: 40px;
  display: flex;
  background-color: #335491;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  & span {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
  }
`;

export const HeaderUserSelect = styled.div`
  display: flex;
  @media (min-width: 992px) {
    min-width: 240px;
    margin-right: auto;
    margin-left: 0;
  }
`;

export const UserSelect = styled.div`
  cursor: pointer;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  marign-right: 10px;
  margin-left: -8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  min-width: 40px;
  height: 40px;
  justify-content: center;
  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 992px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const HeaderDropDown = styled.div`
  padding-left: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: -30px;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PopularBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .link-blue {
    color: #335491;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }
`;

export const SnatchButtonContent = styled.div`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 22px;
`;
