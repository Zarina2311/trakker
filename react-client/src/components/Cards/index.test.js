import React from "react";
import { render } from "@testing-library/react";
import Card from "./index";

describe("Card", () => {
  test("should render Card on the page", () => {
    const { container } = render(<Card />);
    expect(container).toBeInTheDocument();
  });

  test("should show Delete icon button", () => {
    const { container } = render(<Card />);
    const element = container.querySelector(".icon-card");
    expect(element).toBeInTheDocument();
  });

  test("should show the content of the card", () => {
    const { container } = render(<Card content="card content" />);
    expect(container.textContent).toEqual("card content");
  });

  test("should call deleteItem when Delete button is clicked", () => {
    const spy = jest.fn();
    const { container } = render(<Card deleteItem={spy} />);
    container.querySelector(".icon-card").click();
    expect(spy).toBeCalled();
  });
});
