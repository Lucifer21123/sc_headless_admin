import styled from "styled-components";
const NavProductContainer = styled.div`
  position: fixed;
  left: 5.5%;
  z-index: 55;
  top: 143px;
  transition: 0.3s;
  & ul {
    & li {
      margin-bottom: 16px;
      & .active {
        color: #f77d0e;
        ::before {
          position: absolute;
          content: "";
          display: block;
          width: 4px;
          height: 24px;
          background-color: #f77d0e;
          top: 0;
          bottom: 0;
          left: -16px;
        }
      }

      & a {
        position: relative;
        color: #315293;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        padding: 3px 0;
      }
    }
  }
`;
const Navdata = [
  {
    id: 1,
    title: "Short info",
  },
  {
    id: 2,
    title: "images",
  },
  {
    id: 3,
    title: "Product type",
  },
  {
    id: 4,
    title: "Pricing",
  },
  {
    id: 5,
    title: "Avaiability",
  },
  {
    id: 6,
    title: "Organization",
  },
  {
    id: 7,
    title: "Terms and conditions",
  },
  {
    id: 8,
    title: "Additional permissions",
  },
  {
    id: 9,
    title: "Long description",
  },
  {
    id: 10,
    title: "Customization",
  },
  {
    id: 11,
    title: "SC search engine preview",
  },
];

const NavProduct = ({ data = Navdata, onClick }) => {
  return (
    <NavProductContainer>
      <ul>
        {data.map((item, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                onClick(item.id);
              }}
            >
              <a href={"#" + item.id}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </NavProductContainer>
  );
};

export default NavProduct;
