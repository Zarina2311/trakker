import React from "react";
import { render } from "@testing-library/react";
import { Column } from "./index";

describe("Column", () => {
  test("should render Column on the page", () => {
    const { container } = render(
      <Column
        id={0}
        name=""
        onDragOver={() => {}}
        onDragStart={() => {}}
        onDrop={() => {}}
        addCard={() => {}}
        deleteCard={() => {}}
        deleteColumn={() => {}}
        cards={[]}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test("should show a Delete icon button", () => {
    const { container } = render(
      <Column
        id={0}
        name=""
        onDragOver={() => {}}
        onDragStart={() => {}}
        onDrop={() => {}}
        addCard={() => {}}
        deleteCard={() => {}}
        deleteColumn={() => {}}
        cards={[]}
      />
    );
    const element = container.querySelector(".icon-column");
    expect(element).toBeInTheDocument();
  });

  test("should show the name of column", () => {
    const { container } = render(
      <Column
        id={0}
        name="name"
        onDragOver={() => {}}
        onDragStart={() => {}}
        onDrop={() => {}}
        addCard={() => {}}
        deleteCard={() => {}}
        deleteColumn={() => {}}
        cards={[]}
      />
    );
    const element = container.querySelector(".title-column");
    expect(element.textContent).toEqual("name");
  });

  test("should call deleteColumn when Delete button is clicked", () => {
    const spy = jest.fn();
    const { container } = render(
      <Column
        id={0}
        name="name"
        onDragOver={() => {}}
        onDragStart={() => {}}
        onDrop={() => {}}
        addCard={() => {}}
        deleteCard={() => {}}
        deleteColumn={spy}
        cards={[]}
      />
    );
    container.querySelector(".icon-column").click();
    expect(spy).toBeCalled();
  });
});
