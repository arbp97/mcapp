import React from "react";
import "./Home.css";
import Carousel from "../../carousel/Carousel.js";
import HomeCatalogue from "../../homeCatalogue/HomeCatalogue.js";

const Home = (props) => {
    return (
      <div className="Home">
        <Carousel />
        {Object.entries(props.homeCatalogue).map(([key, value]) => {
          return (
            <HomeCatalogue
              key={key}
              img={value.img}
              title={value.title}
              href={value.href}
            />
          );
        })}
      </div>
    );
};

export default Home;
