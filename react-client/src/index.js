import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomeBoard from "./components/HomeBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/homeboard" component={HomeBoard} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
