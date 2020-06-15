import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../../utils/react-auth0-spa";
import "./style.css";

export function Home({ loginWithRedirect }) {
  return (
    <div className="Home">
      <div className="topbar">
        <img src="main-logo.png" alt="logo-trakker" width="50" />
        <h1 className="h1">Trakker</h1>
        <Button className="login-button" onClick={() => loginWithRedirect({})}>
          Log In
        </Button>
      </div>
      <div className="content">
        <h3 className="main-text">Job Search Tracking Just Got Easy</h3>
        <h5 className="short-description">
          An efficient tool to organize and keep track of your next job
          opportunity
        </h5>
        <img
          className="job-search"
          src="job-search.png"
          alt="job-search"
          width="210"
          height="210"
        />
        <Button
          className="signup-button"
          size="lg"
          onClick={() => loginWithRedirect({})}
        >
          Sign Up - It's Free
        </Button>
        <div className="description">
          <br />
          <br />
          <h3 className="main-text">How it works</h3>
          <h5 className="short-description">
            Keep track of your job submissions and their progress one column and
            card at a time
          </h5>
          <h4 className="app-explanation">
            Create a column and give it a name
          </h4>
          <img
            className="new-column"
            src="new-column.png"
            alt="create-new-column"
            width="300"
            style={{ borderRadius: "8%" }}
          />
          <h4 className="app-explanation">
            Create cards of the companies and positions you've applied to
          </h4>
          <img
            className="new-card"
            src="new-card.png"
            alt="create-new-card"
            width="300"
            style={{ borderRadius: "6%" }}
          />
          <h4 className="app-explanation">
            Drag and drop each card according to your job hunt progress
          </h4>
          <img
            className="image"
            src="applied.png"
            alt="drag-n-drop-feature"
            width="300"
            style={{ borderRadius: "6%" }}
          />{" "}
          &nbsp; &nbsp;
          <img
            className="image"
            src="phone-interview.png"
            alt="drag-n-drop-feature"
            width="300"
            style={{ borderRadius: "6%" }}
          />{" "}
          &nbsp; &nbsp;
          <img
            className="image"
            src="onsite-interview.png"
            alt="drag-n-drop-feature"
            width="300"
            style={{ borderRadius: "6%" }}
          />
          <h3 className="call-to-action">
            Make your job hunt easier with Trakker!
          </h3>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

const Connector = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/board" />;
  }

  return <Home loginWithRedirect={loginWithRedirect} />;
};

export default Connector;
