import React from "react";
import { render } from "@testing-library/react";
import AddColumn from "./AddColumn";

describe("AddColumn", () => {
  test("should show Add Column button by default", () => {
    const { container } = render(<AddColumn />);

    // button inside of the element with the class add-column-button
    const element = container.querySelector(".add-column-button button");
    expect(element).toBeInTheDocument();
  });

  test("should show the form after user clicks Add Column", () => {
    const { container } = render(<AddColumn />);
    const button = container.querySelector(".add-column-button button");
    button.click();

    setTimeout(() => {
      const element = container.querySelector(".add-column");
      expect(element).toBeInTheDocument();
    }, 500);
  });

  test("should show form if isFormShown is true", () => {
    const { container } = render(<AddColumn isFormShownDefault={true} />);
    const element = container.querySelector(".add-column");
    expect(element).toBeInTheDocument();
  });

  test("should show input field", () => {
    const { container } = render(<AddColumn isFormShownDefault={true} />);
    const element = container.querySelector(".input-card");
    expect(element).toBeInTheDocument();
  });

  test("should show Cancel icon button", () => {
    const { container } = render(<AddColumn isFormShownDefault={true} />);
    const element = container.querySelector(".icon-cancel");
    expect(element).toBeInTheDocument();
  });
});
