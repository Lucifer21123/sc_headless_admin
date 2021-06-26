import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useScrollPosition } from "utils/use-scroll";
import styled from "styled-components";

const AsideContainer = styled.div`
  max-width: 560px !important;
  width: 100%;
  padding-left: 24px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
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
import mobileBefore from "assets/icons/mobile-before.svg";

type Props = {
  topNavPosition: string;
};

const MobileNav = styled.ul<Props>`
  position: fixed;
  display: none;
  width: 100%;
  z-index: 9999;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  transition: 0.3s;
  top: ${(props) => props.topNavPosition};
  ::before {
    transition: 0.3s;
    content: "";
    background-image: url(${mobileBefore});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 57px;
    margin: auto;
    right: 0;
    left: 0;
    z-index: -2;
  }
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const MobileCreate = styled.a`
  padding-top: 12px;
  color: #f77d0e;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

const SectionButton = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
  padding-right: 20px;
  @media screen and (max-width: 992px) {
    width: 90%;
    margin-top: 60px;
    margin-right: 0px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 560px;
  }
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 148px;
  min-width: 148px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;
  font-weight: 500;
  background-color: #fff;
  border: 2px solid #35558f !important;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  color: #35558f !important;
  :hover {
    background: #35558f !important;
    color: #fff !important;
  }
  @media screen and (max-width: 575px) {
    min-width: 100px;
    max-width: 100px;
  }
`;
const ButtonContainer1 = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 148px;
  min-width: 148px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;
  font-weight: 500;
  background-color: #fff;
  border: 2px solid #35558f !important;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  color: #35558f !important;
  :hover {
    background: #35558f !important;
    color: #fff !important;
  }
  @media screen and (max-width: 575px) {
    min-width: 100px;
    max-width: 100px;
  }
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
    title: "inventory",
  },
  {
    id: 6,
    title: "Avaliability",
    active: false,
  },
  {
    id: 7,
    title: "Organization",
    active: false,
  },
  {
    id: 8,
    title: "Terms and conditions",
    active: false,
  },
  {
    id: 9,
    title: "Additional permissions",
    active: false,
  },
  {
    id: 10,
    title: "Long description",
    active: false,
  },
  {
    id: 11,
    title: "Customization",
    active: false,
  },
  {
    id: 12,
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
  const [scrollPositionTop, setScrollPosition] = useState(0);
  const [topNavPosition, setTopNavPosition] = useState("70px");
  const [top, bottom] = useScrollPosition();
  //!missing the query that getSlug

  useEffect(() => {
    if (bottom != 0) {
      setTopNavPosition("0px");
    } else {
      setTopNavPosition("70px");
    }
    setScrollPosition(top);
  }, [bottom]);

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
      <MobileNav topNavPosition={topNavPosition}>
        <div>
          <MobileCreate>
            Short info
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
            >
              <g>
                <g>
                  <path
                    fill="none"
                    stroke="#f77d0e"
                    stroke-miterlimit="20"
                    d="M1 1v0l5.916 6v0L13 1v0"
                  ></path>
                </g>
              </g>
            </svg>
          </MobileCreate>
        </div>
      </MobileNav>
      <div className="wrapper">
        <div className="main-content">
          <ProductContent>
            {content}
            <SectionButton>
              <a className="btn-border-red">Delete all info</a>
              <div className="d-flex">
                <ButtonContainer1>Cancel edit</ButtonContainer1>
                <ButtonContainer>Save</ButtonContainer>
              </div>
            </SectionButton>
          </ProductContent>

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
