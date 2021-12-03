import React, { useState } from "react";

const CarouselImg = ({ src, alt }) => {
  // estado inicial da imagem
  const [imgState, setImgState] = useState("scale(0.9)");

  // método chamado quando o mouse está em cima da imagem
  const hoveredImg = () => {
    setImgState("scale(1)");
  };

  // método chamado quando o mouse deixa a imagem
  const leavedImg = () => {
    setImgState("scale(0.9)");
  };

  const styledImg = {
    width: "100%",
    transform: imgState,
    transition: "all ease 0.2s",
    cursor: "pointer",
  };

  return (
    <img
      src={src}
      alt={alt}
      style={styledImg}
      onMouseEnter={hoveredImg}
      onMouseLeave={leavedImg}
    />
  );
};

export default CarouselImg;
