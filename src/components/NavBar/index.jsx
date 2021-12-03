import React from "react";

const NavBar = () => {
  const styledNavBar = {
    display: "flex",
    alignItems: "center",
    padding: "0px 50px",
    backgroundColor: "#252525",
    height: "10vh",
    width: "100%",
    position: "fixed",
    zIndex: "2",
  };

  const styledLogo = {
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "24px",
    color: "#ff2222",
  };
  return (
    <div style={styledNavBar}>
      <a style={styledLogo} href="./">
        CLONEFLIX
      </a>
    </div>
  );
};

export default NavBar;
