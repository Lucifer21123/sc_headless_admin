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
        text-decoration: none;
        :hover {
          text-decoration: none;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const NavProduct = ({ data, onClick }) => {
  return (
    <NavProductContainer>
      <ul>
        {data.map((item, key) => {
          return (
            <li
              onClick={() => {
                onClick(item.id);
              }}
              key={key}
            >
              <a
                href={"#" + item.id}
                className={item.active ? "active" : "none"}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </NavProductContainer>
  );
};

export default NavProduct;
