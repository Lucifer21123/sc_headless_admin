import {
  MainContent,
  MainHeader,
  SearchContent,
  SortBox,
  SortBoxFilter,
  SortBoxInline,
  ProductItemsList,
} from "site-settings/site-style/Products/ViewProducts/index.style";

//! import icons
import { AiOutlineQuestionCircle } from "react-icons/ai";

//!import components
import SearchInput from "components/SearchInput/index";
import Dropdown from "components/Dropdown";
import ProductItems from "components/ProductItems";

//!import images
import OrangeJuice from "assets/images/Product/viewProduct/7142447382608.png";

//! dropdown Sort Name Two settings
const sortNameSetting = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#212529",
  headerColor: "#315293",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "1px 1px 4px 1px rgb(11 2 18 / 8%)",
  arrowTop: "30px",
  arrowRight: "-10px",
  itemFontSize: "16px",
  itemFontColor: "#212529",
  itemFontWeight: "normal",
  hoverBackgroundColor: "#f8f9fb",
  hoverColor: "#335491",
};

const StoreNamedata = [
  {
    id: "Store Name Two",
    label: "Store Name Two",
  },
  {
    id: "Store Name One",
    label: "Store Name One",
  },
];

//! sort by settings
const SortByFans = [
  {
    id: "Fans",
    label: "Fans",
  },
  {
    id: "Fans Two",
    label: "Fans Two",
  },
];

const ClickFans = () => {};

const ClickStoreNameTwo = () => {};

//! more reactions

const MoreReactionsSettings = [
  {
    id: "Total",
    label: "Total",
  },
  {
    id: "Like",
    label: "Like",
  },
  {
    id: "Love",
    label: "Love",
  },
  {
    id: "Joy",
    label: "Joy",
  },
  {
    id: "Wow",
    label: "Wow",
  },
  {
    id: "Angry",
    label: "Angry",
  },
];

const ProductItemsData = [
  {
    title:
      "Some much longer title could be here if someone really want it to want",
    isPhoto: false,
    sku: "#134567",
    Qty: 1,
    price: "$49.99",
    comments: 56,
    views: "200K",
    clicks: "500K",
    reactions: 437,
    timeline: 8,
    shared: 6,
    likepercent: "100px",
    like: 200,
    lovepercent: "90px",
    love: 170,
    joypercent: "3px",
    joy: 2,
    wowpercent: "35px",
    wow: 65,
    angrypercent: "0px",
    angry: 0,
    fans: 65,
    nonfans: 8,
    organic: 20,
    paid: 34,
    cost: "$49.90",
    spent: 8,
    cpc: 20,
    cpv: 34,
    addcart: 20,
    sales: 34,
  },
  {
    title:
      "Some much longer title could be here if someone really want it to want",
    isPhoto: true,
    src: OrangeJuice,
    sku: "#134567",
    Qty: 1,
    price: "$49.99",
    comments: 56,
    views: "200K",
    clicks: "500K",
    reactions: 437,
    timeline: 8,
    shared: 6,
    likepercent: "100px",
    like: 200,
    lovepercent: "90px",
    love: 170,
    joypercent: "3px",
    joy: 2,
    wowpercent: "35px",
    wow: 65,
    angrypercent: "0px",
    angry: 0,
    fans: 65,
    nonfans: 8,
    organic: 20,
    paid: 34,
    cost: "$49.90",
    spent: 8,
    cpc: 20,
    cpv: 34,
    addcart: 20,
    sales: 34,
  },
  {
    title:
      "Some much longer title could be here if someone really want it to want",
    isPhoto: false,
    sku: "#134567",
    Qty: 1,
    price: "$49.99",
    comments: 56,
    views: "200K",
    clicks: "500K",
    reactions: 437,
    timeline: 8,
    shared: 6,
    likepercent: "100px",
    like: 200,
    lovepercent: "90px",
    love: 170,
    joypercent: "3px",
    joy: 2,
    wowpercent: "35px",
    wow: 65,
    angrypercent: "0px",
    angry: 0,
    fans: 65,
    nonfans: 8,
    organic: 20,
    paid: 34,
    cost: "$49.90",
    spent: 8,
    cpc: 20,
    cpv: 34,
    addcart: 20,
    sales: 34,
  },
  {
    title:
      "Some much longer title could be here if someone really want it to want",
    isPhoto: true,
    src: OrangeJuice,
    sku: "#134567",
    Qty: 1,
    price: "$49.99",
    comments: 56,
    views: "200K",
    clicks: "500K",
    reactions: 437,
    timeline: 8,
    shared: 6,
    likepercent: "100px",
    like: 200,
    lovepercent: "90px",
    love: 170,
    joypercent: "3px",
    joy: 2,
    wowpercent: "35px",
    wow: 65,
    angrypercent: "0px",
    angry: 0,
    fans: 65,
    nonfans: 8,
    organic: 20,
    paid: 34,
    cost: "$49.90",
    spent: 8,
    cpc: 20,
    cpv: 34,
    addcart: 20,
    sales: 34,
  },
];

//! search functions

const onSearchChange = (eve) => {};
const onSearchButtonClick = () => {};

const ViewProductSection = () => {
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
      <ProductItemsList>
        {ProductItemsData.map((item, key) => {
          return <ProductItems key={key} item={item}></ProductItems>;
        })}
      </ProductItemsList>
    </MainContent>
  );
};

export default ViewProductSection;
