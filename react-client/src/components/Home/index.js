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
        <h1>Trakker</h1>
        <div>
          <Button
            className="login-button"
            color="info"
            onClick={() => loginWithRedirect({})}
          >
            Log In
          </Button>
        </div>
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
          color="info"
          onClick={() => loginWithRedirect({})}
        >
          Sign Up
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>How it works</h3>
        <br />
        <h5>
          Keep track of your job submissions and their progress one column and
          card at a time:
        </h5>
        <br />
        <br />
        <h5>Create a column and give it a name</h5>
        <img
          className="job-search"
          src="new-column.png"
          alt="job-search"
          width="300"
        />
        <br />
        <br />
        <h5>Create cards of the companies and positions you've applied to</h5>
        <img
          className="job-search"
          src="new-card.png"
          alt="job-search"
          width="300"
        />
        <br />
        <br />
        <h5>Drag and drop each card according to your job hunt progress</h5>
        <img
          className="job-search"
          src="drag-n-drop.png"
          alt="job-search"
          width="900"
        />
        <br />
      </div>
    </div>
  );
}

export default Home;
