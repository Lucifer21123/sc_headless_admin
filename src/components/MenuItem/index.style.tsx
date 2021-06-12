import styled from "styled-components";

export const AdminMenuItem = styled.li`
  width: 100%;
  min-height: 30px;
  margin-bottom: 7px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  list-style: none;
`;
export const Icon = styled.svg`
  width: 24px;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
`;

type AdminMenuLinkProps = {
  hide: boolean;
};
export const AdminMenuLink = styled.div<AdminMenuLinkProps>`
  display: flex;
  align-items: center;
  padding-left: 36px;
  line-height: 30px;
  position: relative;
  span {
    font-size: ${(props) => (props.hide ? "0" : "14px")};
    opacity: ${(props) => (props.hide ? 0 : 1)};
    position: relative;
    min-height: 29px;
    display: inline-block;
    white-space: nowrap;
    color: #315293;
    transition: position 0.5s, opacity 0.5s;
    transition-delay: 0.3s;
  }
`;
