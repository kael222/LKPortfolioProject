import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const Logout = (props) => {
  return (
    <div>
      <h1>Wylogowanie nastąpiło pomyślnie</h1>
      <button>
        <Link to={"/start/start"}>Start</Link>
      </button>
    </div>
  );
};

export default Logout;
