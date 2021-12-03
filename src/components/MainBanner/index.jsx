import React from "react";

import { Button } from "..";

const MainBanner = ({ featured }) => {
  const backgroungImg =
    "https://image.tmdb.org/t/p/original" + featured.backdrop_path;

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

  const styledTitle = {
    margin: "10px 0px",
    fontSize: "40px",
    fontWeight: "bold",
    letterSpacing: "2px",
  };

  const styledOverview = {
    textAlign: "justify",
    fontSize: "16px",
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
    <div style={styledMainBanner}>
      <div style={verticalGradient}>
        <div style={horizontalGradient}>
          <div style={textContainer}>
            <div style={textWrapper}>
              <h1 style={styledTitle}>{featured.title}</h1>
              <p style={styledOverview}>{featured.overview}</p>
              <div style={buttonArea}>
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
