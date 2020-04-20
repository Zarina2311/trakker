import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Card,
  CardBody,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Login() {
  return (
    <div className="Login">
      <Form className="Form">
        <Card>
          <CardBody>
            <h2 className="welcome">Welcome back</h2>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <Link to="/board">
              <Button className="login-button btn-lg btn-block">Log In</Button>
            </Link>
            <br />
          </CardBody>
        </Card>
      </Form>
    </div>
  );
}

export default Login;
