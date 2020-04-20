import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
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
      <br />
      <div className="text-center pt-3">Or Login with your social account</div>
      <br />
      <LinkedInLoginButton className="mt-3 mb-3" />
      <GoogleLoginButton className="mt-3 mb-3" />
    </Form>
  );
}

export default SignUp;
