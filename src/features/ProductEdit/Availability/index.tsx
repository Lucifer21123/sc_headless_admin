import { useState } from "react";
import styled from "styled-components";
import CheckBoxLabel from "components/CheckBoxLabel";
import SnatchButton from "components/SnatchButton";

const AvailabilityContainer = styled.div`
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px 1px rgb(11 2 18 / 8%);
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  & h6 {
    margin-bottom: 6px;
  }
  & p {
    padding: 0 !important;
    margin-bottom: 30px !important;
  }
`;

const Availability_Box = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    color: #335491 !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    text-decoration: underline !important;
    display: block;
    margin-bottom: 12px;
  }
  & p {
    padding: 0px !important;
    margin-bottom: 12px !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 14px !important;
    opacity: 1 !important;
  }
`;

export const ManageButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const settings = {
  width: "160px",
  height: "40px",
  fontSize: "16px",
  radius: "5px",
  bg: "#35558f",
  hoverColor: "#274276",
  borderColor: "#243d6d",
  fontColor: "#fff",
};

const Availability = () => {
  const onAllowClick = (checked) => {};
  const onAvailableButtonClick = () => {};
  return (
    <AvailabilityContainer id="6">
      <h6>Availability</h6>
      <p>Product available in the following stores:</p>
      <Availability_Box>
        <a>Store Name</a>
        <p>59 Nerand Street, Southport, QLD 4215</p>
        <CheckBoxLabel onClick={onAllowClick}>
          Allow Click & Collect for this store
        </CheckBoxLabel>
        <ManageButtonContainer>
          <SnatchButton setting={settings} onClick={onAvailableButtonClick}>
            Manage Availability
          </SnatchButton>
        </ManageButtonContainer>
      </Availability_Box>
    </AvailabilityContainer>
  );
};

export default Availability;
