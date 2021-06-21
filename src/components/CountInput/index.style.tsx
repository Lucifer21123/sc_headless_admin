import styled from "styled-components";
export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  & .count {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    align-items: center;
    color: #828282;
    font-size: 14px;
    font-weight: 400;
    right: 10px;
  }
  & input {
    :focus {
      border: 1px solid rgba(53, 85, 143, 0.5);
    }
  }
`;
