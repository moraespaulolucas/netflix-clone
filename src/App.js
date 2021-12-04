import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./styles/main.css";
import { NavBar, MainBanner, Carousel } from "./components";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredShow, setFeaturedShow] = useState({});

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await api.getHomeList();
      setMovieList(list);

      // pegando o featured
      let trendingList = list.filter(item => item.slug === "trending");
      let random = Math.floor(Math.random() * trendingList[0].items.results.length)
      let featured = trendingList[0].items.results[random];
      setFeaturedShow(featured);
    }
    loadAll();
  }, []);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <header>
        <MainBanner featured={featuredShow} />
      </header>
      <section>
        {/* loop que renderiza o carousel de cada categoria */}
        {movieList.map((list, key) => {
          return (
            <Carousel key={key} title={list.title} items={list.items} />
          )
        })}
      </section>
      <footer>

      </footer>
    </>
  );
}

export default App;
