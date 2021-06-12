import { AdminMenuItem, Icon, AdminMenuLink } from "./index.style";
const MenuItem = ({ hide, item, children }) => {
  return (
    <AdminMenuItem>
      <AdminMenuLink hide={hide}>
        <Icon>{children}</Icon>
        <span>{item}</span>
      </AdminMenuLink>
    </AdminMenuItem>
  );
};

export default MenuItem;
