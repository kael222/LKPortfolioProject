import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Part1 from "./components/Home";

const App = (props) => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/start/wyloguj" render={() => <Logout />} />
        <Route path="/start/zaloguj" render={() => <Login />} />
      </HashRouter>
      <Part1 />
    </>
  );
};
// function App() {
//   return <div>eukaliptus</div>;
// }

export default App;
