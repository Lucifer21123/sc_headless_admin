import styled from "styled-components";
type SideBarProps = {
  open: boolean;
};
const StyledBar = styled.div<SideBarProps>`
  display: flex;
  background: #ffffff;
  z-index: 100000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  width: 520px;
  height: 100%;
  overflow: auto;
  transition: transform 0.3s ease-in-out;
`;

const Sidebar = ({ open, children }) => {
  return <StyledBar open={open}>{children}</StyledBar>;
};
export default Sidebar;
