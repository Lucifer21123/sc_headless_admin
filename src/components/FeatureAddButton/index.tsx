import styled from "styled-components";

const FeatureAddButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1;
  min-height: 40px !important;
  color: #35558f;
  font-size: 16px;
  text-align: left;
  justify-content: center;
  border: 1.5px dashed #35558f !important;
  border-radius: 6px;
  margin-right: 15px;
  align-items: center;
  text-decoration: none;
  & img {
    margin-right: 15px;
  }
`;

const FeatureAddButton = ({ onClick, children }) => {
  return (
    <FeatureAddButtonContainer onClick={onClick}>
      {children}
    </FeatureAddButtonContainer>
  );
};

export default FeatureAddButton;
