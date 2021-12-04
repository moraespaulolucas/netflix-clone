import React from "react";

import theme from "../../styles";

// logo do app
const Logo = ({ fontSize }) => {
  const styledLogo = {
    fontSize: fontSize,
    fontWeight: "bold",
    letterSpacing: "2px",
    color: theme.colors.red,
  };
  return (
    <a style={styledLogo} href="./">
      CLONEFLIX
    </a>
  );
};

export default Logo;
