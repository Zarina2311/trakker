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
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import "./style.css";

function SignUp() {
  return (
    <div className="SignUp">
      <Form className="SignUp-form">
        <Card>
          <CardBody>
            <h2 className="SignUp-header">Welcome</h2>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <Button className="Signup-button btn-lg btn-block">Sign Up</Button>
            <br />
            <div className="text-center pt-3">
              Or Login with your social account
            </div>
            <br />
            <LinkedInLoginButton className="mb-3" />
            <GoogleLoginButton className="mb-3" />
          </CardBody>
        </Card>
      </Form>
    </div>
  );
}

export default SignUp;
