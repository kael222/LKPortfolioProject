import React from "react";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navigation = (props) => {
  return (
    <nav>
      <NavLink to="/start/zaloguj">Zaloguj</NavLink>
      <NavLink to="/start/konto">Założ konto</NavLink>
      <NavLink to="/">Start</NavLink>
      <Link to="o-co-chodzi">O co chodzi?</Link>
      <Link to="o-nas">o nas</Link>
      <Link to="fundacja">Fundacja i organizacje</Link>
      <Link to="kontakt">Kontakt</Link>
    </nav>
  );
};
export default Navigation;
