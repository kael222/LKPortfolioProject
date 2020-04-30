import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Login = (props) => {
  return (
    <div>
      <Navigation />
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
