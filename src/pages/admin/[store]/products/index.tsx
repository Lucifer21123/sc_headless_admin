import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  MainContent,
  MainHeader,
  SearchContent,
  SortBox,
  SortBoxFilter,
  SortBoxInline,
} from "site-settings/site-style/Products/ViewProducts/index.style";

//!import components
import SearchInput from "components/SearchInput/index";
import Dropdown from "components/Dropdown";
import ProductList from "components/ProductItems/productlist";

//! import icons
import { AiOutlineQuestionCircle } from "react-icons/ai";

//!import utils
import isEmpty from "utils/is-empty";

//! import apollo
import { initializeApollo } from "utils/apollo-client";
import { GET_PRODUCTS } from "graphql/query/products.query";

//!import settings
import {
  MoreReactionsSettings,
  SortByFans,
  StoreNamedata,
  sortNameSetting,
} from "site-settings/site-setting/products/viewproducts";

const ClickFans = () => {};

const ClickStoreNameTwo = () => {};

const onSearchChange = (eve) => {};
const onSearchButtonClick = () => {};

const ViewProductSection = ({}) => {
  //get the store///but now it didn't use .
  const router = useRouter();
  const { id, comment } = router.query;

  const [productData, setProductData] = useState(null);

  //get Products
  useEffect(() => {
    const apolloClient = initializeApollo();
    apolloClient
      .query({
        query: GET_PRODUCTS,
      })
      .then((res) => {
        const data = res.data.adminGridProducts;

        if (isEmpty(data)) {
          setProductData([]);
        } else {
          setProductData(data);
        }
      });
  }, []);

  return (
    <MainContent>
      <MainHeader>
        <h1>view products</h1>
        <AiOutlineQuestionCircle></AiOutlineQuestionCircle>
      </MainHeader>
      <SortBox>
        <SearchContent>
          <SearchInput
            None={false}
            Placeholder="Search for Products"
            onChange={onSearchChange}
            onClick={onSearchButtonClick}
          >
            <div>1</div>
          </SearchInput>
        </SearchContent>
        <SortBoxInline>
          <p>STORE</p>
          <Dropdown
            settings={sortNameSetting}
            list={StoreNamedata}
            label="Store Name Two"
            click={ClickStoreNameTwo}
          ></Dropdown>
        </SortBoxInline>
        <SortBoxFilter>
          <p>SORT BY</p>
          <div className="sort-box-select">
            <Dropdown
              settings={sortNameSetting}
              list={SortByFans}
              label="Fans"
              click={ClickFans}
            ></Dropdown>
          </div>
          <div className="sort-box-select">
            <Dropdown
              settings={sortNameSetting}
              list={MoreReactionsSettings}
              label="More reactions"
              click={ClickStoreNameTwo}
            ></Dropdown>
          </div>
          <div className="sort-box-select">
            <Dropdown
              settings={sortNameSetting}
              list={StoreNamedata}
              label="Marketing"
              click={ClickStoreNameTwo}
            ></Dropdown>
          </div>
        </SortBoxFilter>
      </SortBox>
      <ProductList data={productData}></ProductList>
    </MainContent>
  );
};
export default ViewProductSection;
