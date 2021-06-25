import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styled from "styled-components";

const AsideContainer = styled.div`
  max-width: 560px !important;
  width: 100%;
  padding-left: 24px;
`;

const SectionContentTitle = styled.span`
  height: 14px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.86px;
  text-transform: uppercase;
  color: #828282;
  position: relative;
  display: flex;
  margin-bottom: 17px;
`;

import NavProduct from "features/ProductEdit/NavProduct";
import ProductEdit from "features/ProductEdit";
import Loader from "components/Loader/page-loader";

//! import apollo
import { initializeApollo } from "utils/apollo-client";
import { GET_PRODUCTBYID } from "graphql/query/products.query";
import { GET_STOREIDBYNAME } from "graphql/query/store.query";

import AsideSection from "features/ProductEdit/AsideSection";
const NavData = [
  {
    id: 1,
    title: "Short info",
    active: true,
  },
  {
    id: 2,
    title: "images",
    active: false,
  },
  {
    id: 3,
    title: "Product type",
    active: false,
  },
  {
    id: 4,
    title: "Pricing",
    active: false,
  },
  {
    id: 5,
    title: "Avaiability",
    active: false,
  },
  {
    id: 6,
    title: "Organization",
    active: false,
  },
  {
    id: 7,
    title: "Terms and conditions",
    active: false,
  },
  {
    id: 8,
    title: "Additional permissions",
    active: false,
  },
  {
    id: 9,
    title: "Long description",
    active: false,
  },
  {
    id: 10,
    title: "Customization",
    active: false,
  },
  {
    id: 11,
    title: "SC search engine",
    active: false,
  },
];
const Slug = () => {
  const router = useRouter();
  const { store, slug } = router.query;
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [navData, setNavData] = useState(NavData);
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
    content = <ProductEdit data={data} store={store}></ProductEdit>;
  }

  const onNavClick = (val) => {
    let temp = [...navData];
    temp.filter((item, key) => item.active == true)[0].active = false;
    temp.filter((item, key) => item.id == val)[0].active = true;
    setNavData(temp);
  };
  return (
    <>
      <NavProduct data={navData} onClick={onNavClick}></NavProduct>
      <div className="wrapper">
        <div className="main-content">
          {content}
          <AsideContainer>
            <SectionContentTitle>statistic</SectionContentTitle>
            <AsideSection></AsideSection>
          </AsideContainer>
        </div>
      </div>
    </>
  );
};

export default Slug;
