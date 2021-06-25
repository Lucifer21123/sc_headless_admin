import styled from "styled-components";

const PreviewSectionContainer = styled.div`
  padding: 24px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  & h6 {
    margin-bottom: 20px;
  }
`;

const PreviewSection = () => {
  return (
    <PreviewSectionContainer id="12">
      <h6>splitchek search engine preview</h6>
    </PreviewSectionContainer>
  );
};

export default PreviewSection;
