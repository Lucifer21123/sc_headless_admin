import styled from "styled-components";

export const OrganizationContainer = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
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
  min-width: 240px;
  max-width: 100%;
  margin-right: 30px;
  & .form-single {
    min-width: 240px;
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
  margin-left: 5px;
  display: flex;
  align-items: flex-end;
  flex: 1;
  justify-content: flex-end;
  & Button {
    padding: 0;
    max-width: 160px;
    min-width: 134px;
    width: 100%;
  }
  & a {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
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
