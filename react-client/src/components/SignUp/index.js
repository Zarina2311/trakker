import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./style.css";

function SignUp() {
  return (
    <Form className="SignUp">
      <h1>Trakker</h1>
      <h2>Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button className="btn-lg btn-info btn-block">Sign Up</Button>
      <div className="text-center pt-3">Or Login with your social account</div>
    </Form>
  );
}

export default SignUp;
