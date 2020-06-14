import React from "react";
import { render } from "@testing-library/react";
import { Board } from "./index";

describe("Board", () => {
  test("should render without an error", () => {
    const { container } = render(
      <Board
        columns={[]}
        addColumn={() => {}}
        moveCard={() => {}}
        logout={() => {}}
        userPhoto=""
        boardName=""
      />
    );

    expect(container).toBeInTheDocument();
  });

  test("should render user's name on the board", () => {
    const { container } = render(
      <Board
        columns={[]}
        addColumn={() => {}}
        moveCard={() => {}}
        logout={() => {}}
        userPhoto=""
        boardName="user's name"
      />
    );

    const titleOnPage = container.querySelector(".Board-title").textContent;
    expect(titleOnPage).toEqual("user's name");
  });

  test("should render user's photo on the board", () => {
    const { container } = render(
      <Board
        columns={[]}
        addColumn={() => {}}
        moveCard={() => {}}
        logout={() => {}}
        userPhoto="http://userphoto/"
        boardName=""
      />
    );

    const photoOnPage = container.querySelector(".Board-title img").src;
    expect(photoOnPage).toBe("http://userphoto/");
  });

  test("should render a Log Out button", () => {
    const { container } = render(
      <Board
        columns={[]}
        addColumn={() => {}}
        moveCard={() => {}}
        logout={() => {}}
        userPhoto=""
        boardName=""
      />
    );

    const logOutButton = container.querySelector(".page-top button");
    expect(logOutButton).toBeInTheDocument();
  });

  test("should render a Log Out button", () => {
    const { container } = render(
      <Board
        columns={[]}
        addColumn={() => {}}
        moveCard={() => {}}
        logout={() => {}}
        userPhoto=""
        boardName=""
      />
    );

    const logOutButton = container.querySelector(".page-top button");
    expect(logOutButton).toBeInTheDocument();
  });

  test("should log out from the page when user clicks Log Out button", () => {
    const spy = jest.fn();
    const { container } = render(
      <Board
        columns={[]}
        addColumn={() => {}}
        moveCard={() => {}}
        logout={spy}
        userPhoto=""
        boardName=""
      />
    );

    container.querySelector(".page-top button").click();
    expect(spy).toBeCalled();
  });
});
