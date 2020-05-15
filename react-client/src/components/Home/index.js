import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../../utils/react-auth0-spa";
import "./style.css";

function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/board" />;
  }

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
        <h3>Job Search Tracking Just Got Easy</h3>
        <br />
        <h5>
          An efficient tool to organize and keep track of your next job
          opportunity
        </h5>
        <br />
        <br />
        <br />
        <img
          className="job-search"
          src="job-search.png"
          alt="job-search"
          width="210"
          height="210"
        />
        <br />
        <br />
        <Button
          className="signup-button"
          size="lg"
          onClick={() => loginWithRedirect({})}
        >
          Sign Up - It's Free
        </Button>
        <br />
        <br />
        <br />
        <br />
        <div className="description">
          <br />
          <br />
          <h3>How it works</h3>
          <br />
          <h5>
            Keep track of your job submissions and their progress one column and
            card at a time
          </h5>
          <br />
          <br />
          <h4>Create a column and give it a name</h4>
          <br />
          <img
            className="new-column"
            src="new-column.png"
            alt="create-new-column"
            width="300"
            style={{ borderRadius: "8%" }}
          />
          <br />
          <br />
          <br />
          <br />
          <h4>Create cards of the companies and positions you've applied to</h4>
          <br />
          <img
            src="new-card.png"
            alt="create-new-card"
            width="300"
            style={{ borderRadius: "6%" }}
          />
          <br />
          <br />
          <br />
          <br />
          <h4>Drag and drop each card according to your job hunt progress</h4>
          <br />
          <img
            src="applied.png"
            alt="drag-n-drop-feature"
            width="300"
            style={{ borderRadius: "6%" }}
          />{" "}
          &nbsp; &nbsp;
          <img
            src="phone-interview.png"
            alt="drag-n-drop-feature"
            width="300"
            style={{ borderRadius: "6%" }}
          />{" "}
          &nbsp; &nbsp;
          <img
            src="onsite-interview.png"
            alt="drag-n-drop-feature"
            width="300"
            style={{ borderRadius: "6%" }}
          />
          <br />
          <br />
          <br />
          <br />
          <h3>Make your job hunt easier with Trakker! </h3>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
