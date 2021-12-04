import React from "react";

import { Button } from "..";

const MainBanner = ({ featured }) => {
  const backgroungImg =
    "https://image.tmdb.org/t/p/original" + featured.backdrop_path;

  // verificando se o show mostrado no banner é uma série ou um filme
  // séries tem o nome como "name", filmes tem como "title"
  const verifyTitle = () => {
    if (featured.title) {
      return featured.title;
    } else {
      return featured.name;
    }
  };
  const bannerTitle = verifyTitle();

  const styledMainBanner = {
    height: "90vh",
    backgroundImage: "url(" + backgroungImg + ")",
    backgroungPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const verticalGradient = {
    width: "inherit",
    height: "inherit",
    background: "linear-gradient(to top, #252525 5%, transparent 50%)",
  };

  const horizontalGradient = {
    width: "inherit",
    height: "inherit",
    background: "linear-gradient(to right, #252525 10%, transparent 100%)",
  };

  const textContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "inherit",
    height: "inherit",
    padding: "5%",
  };

  const textWrapper = {
    width: "30%",
  };

  const styledOverview = {
    textAlign: "justify",
  };

  const overviewWrapper = {
    display: "flex",
    overflow: "auto",
    maxHeight: "100px",
    padding: "0px 10px",
  };

  const buttonArea = {
    margin: "10px 0px",
    display: "flex",
    justifyContent: "center",
  };
  //   if (featured.overview.length > 180) {
  //     featuredDesc = featured.overview.slice(0, 180) + "...";
  //   } else {
  //     featuredDesc = featured.overview;
  //   }

  return (
    <div style={styledMainBanner} className="MainBanner">
      <div style={verticalGradient} className="verticalGradient">
        <div style={horizontalGradient} className="horizontalGradient">
          <div style={textContainer} className="textContainer">
            <div style={textWrapper} className="textWrapper">
              <h1 className="bannerTitle">{bannerTitle}</h1>
              <div style={overviewWrapper} className="overviewWrapper">
                <p style={styledOverview} className="bannerOverview">
                  {featured.overview}
                </p>
              </div>
              <div style={buttonArea} className="buttonArea">
                <Button textColor="#ffffff" bgColor="#ff2222">
                  Assistir
                </Button>
                <Button textColor="#000000" bgColor="#ffffff">
                  Mais Informações
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
