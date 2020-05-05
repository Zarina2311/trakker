import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./style.css";

function Home() {
  return (
    <div className="Home">
      <div className="topbar">
        <h1>Trakker</h1>
        <Link to="/login">
          <Button className="login-button" color="info">
            Log In
          </Button>
        </Link>
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
        <Link to="/signup">
          <Button className="signup-button" size="lg" color="info">
            Sign Up - It's Free
          </Button>
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Home;
