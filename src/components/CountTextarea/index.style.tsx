import styled from "styled-components";

export const CountTextAreaContent = styled.div`
  position: relative;
  width: 100%;
  padding-top: 6px;
  & textarea {
    height: 120px;
  }
  & .count {
    position: absolute;
    right: 12px;
    bottom: 12px;
    opacity: 0.75;
    color: #0b0212;
    font-size: 14px;
    font-weight: 400;
    text-align: right;
    display: flex;
  }
  & textarea {
    :focus {
      border: 1px solid rgba(53, 85, 143, 0.5);
    }
  }
`;
