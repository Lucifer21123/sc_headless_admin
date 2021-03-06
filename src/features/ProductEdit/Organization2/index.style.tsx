import styled from "styled-components";

export const Organization2Container = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  & h6 {
    margin-bottom: 15px;
  }
`;

export const OrganizationSingle = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-bottom: 16px;
`;

export const MembersForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  max-width: 100%;
  min-width: 240px;
  margin-right: 30px;
  & .form-single {
    margin: 0;
    width: 100%;
  }

  @media (max-width: 575px) {
    margin-right: 0;
    margin-bottom: 16px;
    max-width: 100% !important;
    min-width: 100%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  & Button {
    padding: 0;
    max-width: 160px;
    min-width: 160px;
    width: 100%;
  }
  & a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 160px;
    min-width: 134px;
    height: 40px;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.3s;
    font-weight: 500;
    background-color: #fff;
    border: 2px solid #35558f !important;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
    color: #35558f !important;
    :hover {
      background: #35558f !important;
      color: #fff !important;
    }
  }
`;

export const OrganizationUpdate = styled.div`
  margin-top: 32px;
  max-width: 231px;
  color: #35558f;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 18px;
  & p {
    font-size: 18px !important;
    margin-bottom: 16px !important;
    color: #35558f !important;
    font-size: 18px !important;
    font-weight: 400 !important;
    opacity: 1 !important;
    padding: 0 !important;
  }
`;
