import React from "react";

const FourSteps = (props) => {
  return (
    <>
      <section>
        <div>
          <h1>Wystarczą cztery proste kroki</h1>
          <img></img>
        </div>
      </section>
      <section>
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
    </>
  );
};
export default FourSteps;
