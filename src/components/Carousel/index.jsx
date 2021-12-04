import React from "react";

import { CarouselImg } from "..";

const MovieRow = ({ title, items }) => {
  const styledCarouselArea = {
    margin: "15px 0px",
    overflowX: "auto",
  };

  const styledCarouselTitle = {
    margin: "0px 20px",
    fontWeight: "bold",
    fontSize: "24px",
    letterSpacing: "2px",
  };

  const styledCarouselList = {
    display: "inline-flex",
  };

  const styledCarouselItemImg = {
    width: "150px",
  };

  return (
    // área total do carousel
    <div className="carouselArea" style={styledCarouselArea}>
      {/* título */}
      <h2 className="carouselTitle" style={styledCarouselTitle}>
        {title}
      </h2>
      {/* carousel de imagens */}
      <div className="carouselList" style={styledCarouselList}>
        {/* loop que percore cada filme do array items */}
        {items.results.length > 0 &&
          items.results.map((item, key) => {
            return (
              // div que controla o tamanho da imagem
              <div
                key={key}
                className="carouselItemImg"
                style={styledCarouselItemImg}
              >
                {/* imagem */}
                <CarouselImg
                  src={"https://image.tmdb.org/t/p/w200" + item.poster_path}
                  alt={item.title}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieRow;
