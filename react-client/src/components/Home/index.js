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
          <h5>Get organized. Follow job hunt through every stage. </h5>
          <h5>
            Keep track of your job submissions and their progress one column and
            card at a time:
          </h5>
          <br />
          <br />
          <p>1. Create a column and give it a name</p>
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
          <p>
            2. Create cards of the companies and positions you've applied to
          </p>
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
          <p>3. Drag and drop each card according to your job hunt progress</p>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
