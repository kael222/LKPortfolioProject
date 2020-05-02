import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Home from "./components/Home";
import "./scss/main.scss";

const App = () => {
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

export default App;
