import React from "react";

const FourSteps = (props) => {
  return (
    <>
      <section id="o-co-chodzi" className="fourSteps">
        <div className>
          <h1>Wystarczą cztery proste kroki</h1>
          <img className="decoration"></img>
        </div>
        <section className="icons">
          <div>
            <img></img>
            <p>Wybierz rzeczy</p> <hr /> <p>ubrania, zabawki, sprżet i inne</p>
          </div>
          <div>
            <img></img>
            <p>Spakuj je</p> <hr />
            <p>skorzystaj z worków na śmieci</p>
          </div>
          <div>
            <img></img>
            <p>Zdecyduj komu chcesz pomóc </p> <hr />{" "}
            <p> wybierz zaufane miejsce</p>
          </div>
          <div>
            <img></img>
            <p>Zamów kuriera </p>
            <hr />
            <p>kurier przyjedzie w dowolym terminie</p>
          </div>
        </section>
        <section>
          <button>Oddaj rzeczy</button>
        </section>
      </section>
    </>
  );
};
export default FourSteps;
