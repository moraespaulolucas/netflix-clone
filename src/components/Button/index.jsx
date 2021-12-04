import React, { useState } from "react";

const Button = (props) => {
  const [state, setState] = useState("scale(0.9)");

  // método chamado quando o mouse está em cima do botão
  const hoveredButton = () => {
    setState("scale(1)");
  };

  // método chamado quando o mouse deixa o botão
  const leavedButton = () => {
    setState("scale(0.9)");
  };

  const styledButton = {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    margin: "0px 10px",
    padding: "10px 15px",
    borderRadius: "5px",
    color: props.textColor,
    backgroundColor: props.bgColor,
    fontWeight: "bold",
    cursor: "pointer",
    transform: state,
    transition: "all ease 0.2s",
  };
  return (
    <div
      style={styledButton}
      onMouseEnter={hoveredButton}
      onMouseLeave={leavedButton}
    >
      {props.children}
    </div>
  );
};

export default Button;
