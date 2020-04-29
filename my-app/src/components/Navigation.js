import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <HashRouter>
      <NavLink to="/start/zaloguj">Zaloguj</NavLink> |{" "}
      <NavLink to="/start/konto">Założ konto</NavLink> |{" "}
      <NavLink to="/start/start">Start</NavLink> |{" "}
      <NavLink to="/start/o-co-chodzi">O co chodzi?</NavLink> |{" "}
      <NavLink to="/start/o-nas">o nas</NavLink> |
      <NavLink to="/start/fundacja">Fundacja i organizacje</NavLink>|
      <NavLink to="/start/kontakt">Kontakt</NavLink>|
      <NavLink to="/start/wyloguj">wyoguj się</NavLink>|
      <Switch>
        <Route path="/start/" />
        {/* <Route path="/checkage/" component={Checkage} /> */}
      </Switch>
    </HashRouter>
  );
};
export default Navigation;
