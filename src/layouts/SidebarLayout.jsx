import { Stack } from "react-bootstrap";
import PropTypes from "prop-types";

const SidebarLayout = ({ children, bg }) => {
  return (
    <aside
      as="aside"
      id="sidebar"
      className="order-last order-md-first start position-sticky top-0 overflow-scroll"
      style={{ height: "100dvh", backgroundColor: bg }}
    >
      <Stack
        direction="horizontal"
        className="flex-column flex-wrap flex-md-nowrap align-items-start"
      >
        {children}
      </Stack>
    </aside>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.any.isRequired,
  bg: PropTypes.string,
};

SidebarLayout.defaultProps = {
  bg: "transparent",
};

export default SidebarLayout;
