import { useRouter } from "next/router";

import styled from "styled-components";

import NavProduct from "features/ProductEdit/NavProduct";
import ProductEdit from "features/ProductEdit";

const ProductTitleData = {
  title: "",
  description: "",
};

const Slug = () => {
  const router = useRouter();
  const { store, slug } = router.query;

  const onTitleChange = (val) => {};
  const onDescriptionChange = (val) => {};

  return (
    <>
      <div className="wrapper">
        <div className="main-content">
          <ProductEdit
            data={ProductTitleData}
            onTitleChange={onTitleChange}
            onDescriptionChange={onDescriptionChange}
          ></ProductEdit>
        </div>
      </div>
    </>
  );
};

export default Slug;
