import React from "react";
import Navigation from "./Navigation";

const HomeHeader = () => (
  <>
    <section id="home">
      <Navigation />
    </section>
    <section>
      <img></img>{" "}
    </section>
    <section>
      {" "}
      <h1>
        Zaczni pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce{" "}
      </h1>
      <div className="ozdoba"></div>
    </section>
  </>
);

export default HomeHeader;
