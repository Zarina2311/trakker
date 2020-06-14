import React from "react";
import { render } from "@testing-library/react";
import AddCard from "./AddCard";

describe("AddCard", () => {
  test("should show Add Card button", () => {
    const { getByText } = render(<AddCard />);
    const element = getByText("Add Card");
    expect(element).toBeInTheDocument();
  });

  test("should show the form after user clicks Add Card", () => {
    const { container } = render(<AddCard isFormShownDefault={true} />);
    const button = container.querySelector(".add-card button");
    button.click();

    setTimeout(() => {
      const element = container.querySelector(".add-card");
      expect(element).toBeInTheDocument();
    }, 500);
  });

  test("should show form if isFormShown is true", () => {
    const { container } = render(<AddCard isFormShownDefault={true} />);
    const element = container.querySelector(".add-card");
    expect(element).toBeInTheDocument();
  });

  test("should show input field", () => {
    const { container } = render(<AddCard isFormShownDefault={true} />);
    const element = container.querySelector(".input-card");
    expect(element).toBeInTheDocument();
  });

  test("should show Cancel icon button", () => {
    const { container } = render(<AddCard isFormShownDefault={true} />);
    const element = container.querySelector(".icon-cancel");
    expect(element).toBeInTheDocument();
  });
});
