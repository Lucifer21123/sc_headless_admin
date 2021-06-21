import { useState } from "react";
import styled from "styled-components";

const StandardSectionContainer = styled.div``;

const StandardSection = () => {
  return (
    <StandardSectionContainer>
      <p>
        A simple product can be sold individually or as part of a kit, or a
        bundle product.
      </p>
    </StandardSectionContainer>
  );
};

export default StandardSection;
