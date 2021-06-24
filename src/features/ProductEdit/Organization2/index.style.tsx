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
  margin-right: 30px;
  & .form-single {
    max-width: 100%;
    min-width: 240px;
    margin: 0;
    width: 100%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  & Button {
    padding: 0;
    max-width: 160px;
    min-width: 160px;
    width: 100%;
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
  }
`;
