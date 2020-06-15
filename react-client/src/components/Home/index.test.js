import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./index";

describe("Home", () => {
  test("should show Home page", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  test("should show Log In button", () => {
    const { container } = render(<Home />);
    const element = container.querySelector(".login-button");
    expect(element).toBeInTheDocument();
  });

  test("should show Sign Up button", () => {
    const { container } = render(<Home />);
    const element = container.querySelector(".signup-button");
    expect(element).toBeInTheDocument();
  });

  test("should call loginWithRedirect when user clicks on the Sign Up button", () => {
    const spy = jest.fn();
    const { container } = render(<Home loginWithRedirect={spy} />);
    const button = container.querySelector(".signup-button");
    button.click();
    expect(spy).toBeCalled();
  });

  test("should call loginWithRedirect when user clicks on the Log In button", () => {
    const spy = jest.fn();
    const { container } = render(<Home loginWithRedirect={spy} />);
    const button = container.querySelector(".login-button");
    button.click();
    expect(spy).toBeCalled();
  });
});
