import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import history from "./utils/history";
import { Auth0Provider } from "./utils/react-auth0-spa";
import config from "./auth_config.json";

// A function that routes the user to the right place after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/board" component={Board} />
        </Switch>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
