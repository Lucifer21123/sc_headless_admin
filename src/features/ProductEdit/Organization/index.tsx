import { useState } from "react";
import {
  MembersForm,
  OrganizationContainer,
  OrganizationSingle,
  ButtonContainer,
} from "./index.style";

//!import components
import FormLabel from "components/FormLabel";
import Select from "components/Select";
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

const brandlist = [
  {
    id: 1,
    label: "Brand",
  },
  {
    id: 2,
    label: "Brand Two",
  },
];

const Organization = () => {
  const onCategorySelect = (item) => {
    console.log(item);
  };
  const onBrandSelect = (item) => {
    console.log(item);
  };
  return (
    <OrganizationContainer id="7">
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
      <OrganizationSingle>
        <MembersForm>
          <div className="form-single">
            <FormLabel>Brands</FormLabel>
            <Select
              label="Brand"
              list={brandlist}
              click={onBrandSelect}
            ></Select>
          </div>
        </MembersForm>
        <ButtonContainer>
          <Button variant="outlinedbitDarkBlue" size="small">
            Create brand
          </Button>
        </ButtonContainer>
      </OrganizationSingle>
    </OrganizationContainer>
  );
};

export default Organization;
