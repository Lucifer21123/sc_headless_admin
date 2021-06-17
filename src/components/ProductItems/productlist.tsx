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
  let content = <>There is no data</>;
  if (!isEmpty(data)) {
    content = data.edges.map((item, key) => {
      return <ProductItems item={item} key={key}></ProductItems>;
    });
  } else {
    content = <PageLoader />;
  }
  return <ProductItemsList>{content}</ProductItemsList>;
};
export default ProductList;
