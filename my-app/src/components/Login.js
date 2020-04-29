import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const Login = (props) => {
  return (
    <div>
      <h1>Zaloguj się!</h1>
      <form>
        <p>email</p>
        <p>hasło</p>
      </form>
      <button>
        <Link to={"/start/konto"}>Załóż konto</Link>
      </button>
      <button>
        <Link to={"/start/start"}>Zaloguj się</Link>
      </button>
    </div>
  );
};

export default Login;
