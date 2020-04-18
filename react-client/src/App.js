import React from "react";
import "./App.css";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div>
        <Button className="button2" color="info">
          Log In
        </Button>
      </div>
      <h1>Trakker</h1>
      <br />
      <br />
      <h3>Job Search Tracking Just Got Easy</h3>
      <br />
      <h5>
        Trakker is an efficient tool to organize and keep track of your next job
        opportunity
      </h5>
      <br />
      <Button className="button1">Sign Up - It's Free</Button>
    </div>
  );
}

export default App;
