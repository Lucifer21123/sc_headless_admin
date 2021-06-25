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
    <Organization2Container id="8">
      <h6>Organization</h6>
      <OrganizationSingle>
        <MembersForm>
          <div className="form-single">
            <div className="mb-1">
              <FormLabel>Categories</FormLabel>
            </div>

            <Select
              label="Category"
              list={list}
              click={onCategorySelect}
            ></Select>
          </div>
        </MembersForm>
        <ButtonContainer>
          <a>Create category</a>
        </ButtonContainer>
      </OrganizationSingle>
      <OrganizationUpdate>
        <p>Custom brands are not supported on a free account</p>
        <ButtonContainer>
          <a>Upgrade account</a>
        </ButtonContainer>
      </OrganizationUpdate>
    </Organization2Container>
  );
};

export default Organization2;
