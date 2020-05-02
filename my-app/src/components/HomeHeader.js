import React from "react";
import Navigation from "./Navigation";

const HomeHeader = () => (
  <>
    <section id="home">
      <Navigation />
    </section>
    <section className="headerSection">
      <img alt=""></img>
      <section>
        {" "}
        <h1>
          Zaczni pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce{" "}
        </h1>
        <div className="decoration"></div>
        <button>ODDAJ RZECZY</button>
        <button>ORGANIZUJ ZBIÓRKĘ</button>
      </section>
    </section>
  </>
);

export default HomeHeader;
