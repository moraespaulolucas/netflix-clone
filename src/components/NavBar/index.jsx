import React from "react";

import { Logo } from "..";
import theme from "../../styles";

const NavBar = () => {
  const styledNavBar = {
    display: "flex",
    alignItems: "center",
    padding: "0px 50px",
    height: "10vh",
    width: "100%",
    position: "fixed",
    zIndex: "2",
    backgroundColor: theme.colors.background,
  };
  return (
    <div style={styledNavBar}>
      <Logo fontSize={theme.sizes.title} />
    </div>
  );
};

export default NavBar;
