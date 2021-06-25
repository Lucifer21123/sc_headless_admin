import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styled from "styled-components";

const AsideContainer = styled.div`
  max-width: 560px !important;
  width: 100%;
  padding-left: 24px;
`;

import NavProduct from "features/ProductEdit/NavProduct";
import ProductEdit from "features/ProductEdit";
import Loader from "components/Loader/page-loader";

//! import apollo
import { initializeApollo } from "utils/apollo-client";
import { GET_PRODUCTBYID } from "graphql/query/products.query";
import { GET_STOREIDBYNAME } from "graphql/query/store.query";

const Slug = () => {
  const router = useRouter();
  const { store, slug } = router.query;
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);
  //!missing the query that getSlug

  const apolloClient = initializeApollo();
  useEffect(() => {
    if (slug == undefined) {
      return;
    }
    apolloClient
      .query({
        query: GET_PRODUCTBYID,
        variables: {
          oid: slug,
        },
      })
      .then((res) => {
        setdata(res.data.productById.data);
        setLoading(false);
      });
  }, []);
  let content = <></>;
  if (loading == true) {
    content = <Loader></Loader>;
  } else {
    content = <ProductEdit data={data}></ProductEdit>;
  }

  const onNavClick = (val) => {};
  return (
    <>
      <NavProduct onClick={onNavClick}></NavProduct>
      <div className="wrapper">
        <div className="main-content">
          {content}
          <AsideContainer>asd</AsideContainer>
        </div>
      </div>
    </>
  );
};

export default Slug;
