import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Home() {
  return (
    <div className="Home">
      <Link to="/login">
        <Button className="button2" color="info">
          Log In
        </Button>
      </Link>
      <h1>Trakker</h1>
      <br />
      <br />
      <h3>Job Search Tracking Just Got Easy</h3>
      <br />
      <h5>
        An efficient tool to organize and keep track of your next job
        opportunity
      </h5>
      <br />
      <br />{" "}
      <div>
        <img
          className="job-search"
          src="job-search.png"
          alt="job-search-image"
          width="210"
          height="210"
        />
      </div>
      <br />
      <Link to="/signup">
        <Button className="button1" size="lg" color="info">
          Sign Up - It's Free
        </Button>
      </Link>
      <br />
    </div>
  );
}

export default Home;
