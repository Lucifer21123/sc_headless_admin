import { useState } from "react";
import ProductItems from "./index";
import styled from "styled-components";
import isEmpty from "utils/is-empty";
import PageLoader from "components/Loader/page-loader";
export const ProductItemsList = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductList = ({ data }) => {
  const [state, setstate] = useState(false);
  let content = <>There is no data</>;
  const onBodyToggle = (item) => {
    setstate(item);
  };
  if (!isEmpty(data)) {
    content = data.edges.map((item, key) => {
      return (
        <ProductItems
          onBodyToggle={onBodyToggle}
          item={item}
          key={key}
          state={state}
        ></ProductItems>
      );
    });
  } else {
    content = <PageLoader />;
  }

  return <ProductItemsList>{content}</ProductItemsList>;
};
export default ProductList;
