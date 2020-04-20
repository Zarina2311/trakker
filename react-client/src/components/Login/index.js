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
import "./style.css";

function Login() {
  return (
    <div className="Login">
      <br />
      <br />
      <br />
      <Form className="Form">
        <br />
        <Card>
          <CardBody>
            <h2 className="welcome">Welcome back</h2>
            <br />
            <br />
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <Button className="btn-lg btn-info btn-block">Log In</Button>
            <br />
          </CardBody>
        </Card>
      </Form>
    </div>
  );
}

export default Login;
