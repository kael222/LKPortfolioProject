import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Home from "./components/Home";
import "./scss/main.scss";

const App = (props) => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/start/wyloguj" component={Logout} />
          <Route path="/start/zaloguj" component={Login} />
        </Switch>
      </HashRouter>
    </>
  );
};
// function App() {
//   return <div>eukaliptus</div>;
// }

export default App;
