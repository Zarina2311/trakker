import React from "react";
import { Button } from "reactstrap";
import "./style.css";

function Home() {
  return (
    <div className="Home">
      <div className="topbar">
        <h1>Trakker</h1>
        <a href="http://localhost:3001/login">
          <Button className="login-button" color="info">
            Log In
          </Button>
        </a>
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
        <a href="http://localhost:3001/login">
          <Button className="signup-button" size="lg" color="info">
            Sign Up - It's Free
          </Button>{" "}
        </a>
        <br />
      </div>
    </div>
  );
}

export default Home;
