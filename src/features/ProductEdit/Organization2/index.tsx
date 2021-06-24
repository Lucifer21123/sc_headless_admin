import {
  ButtonContainer,
  OrganizationSingle,
  MembersForm,
  Organization2Container,
  OrganizationUpdate,
} from "./index.style";
import { useState } from "react";
import Select from "components/Select";
import FormLabel from "components/FormLabel";
import { Button } from "components/Button";

const list = [
  {
    id: 1,
    label: "Category",
  },
  {
    id: 2,
    label: "Category Two",
  },
];

const Organization2 = () => {
  const onCategorySelect = (item) => {};
  return (
    <Organization2Container>
      <h6>Organization</h6>
      <OrganizationSingle>
        <MembersForm>
          <div className="form-single">
            <FormLabel>Categories</FormLabel>
            <Select
              label="Category"
              list={list}
              click={onCategorySelect}
            ></Select>
          </div>
        </MembersForm>
        <ButtonContainer>
          <Button variant="outlinedbitDarkBlue" size="small">
            Create category
          </Button>
        </ButtonContainer>
      </OrganizationSingle>
      <OrganizationUpdate>
        <p>Custom brands are not supported on a free account</p>
        <ButtonContainer>
          <Button variant="outlinedbitDarkBlue" size="small">
            Upgrade account
          </Button>
        </ButtonContainer>
      </OrganizationUpdate>
    </Organization2Container>
  );
};

export default Organization2;
