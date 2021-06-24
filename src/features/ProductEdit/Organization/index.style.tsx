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
