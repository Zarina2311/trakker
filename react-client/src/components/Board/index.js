import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import AddColumn from "./AddColumn";
import Column from "../Column";
import "./style.css";
import useBoard from "../../useBoard";

library.add(faTimesCircle);

const Board = () => {
  const {
    columns,
    addColumn,
    moveCard,
    isAuthenticated,
    logout,
    user,
  } = useBoard();

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  const userPhoto = user ? user.picture : "";
  const boardName =
    user && user.given_name ? user.given_name + "'s Board" : "My Board";

  const onDragStart = (event) => {
    const initialCardId = event.target.id;
    const initialColumnId = event.target.parentNode.dataset.columnId;
    event.dataTransfer.setData("initialCardId", initialCardId);
    event.dataTransfer.setData("initialColumnId", initialColumnId);

    event.persist();
    setTimeout(() => {
      event.target.classList.add("hidden-item");
    }, 10);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    event.preventDefault();
    const initialColumnId = event.dataTransfer.getData("initialColumnId");
    const initialCardId = event.dataTransfer.getData("initialCardId");
    const finalColumnId = event.target.closest(".col").dataset.columnId;

    moveCard({
      cardId: initialCardId,
      columnId: initialColumnId,
      newColumnId: finalColumnId,
    });
  };

  return (
    <div className="page">
      <div className="page-top">
        <h5 className="Board-title">
          <img
            alt=""
            src={userPhoto}
            style={{ borderRadius: "100%", marginRight: "1em" }}
            width="50"
          />
          {boardName}
        </h5>
        <Button onClick={logout} color="info">
          Log Out
        </Button>
      </div>
      <div className="page-bottom">
        <div className="columns">
          {columns.map((column, index) => (
            <Column
              key={column.id}
              id={column.id}
              name={column.name}
              columnId={index}
              onDragOver={onDragOver}
              onDragStart={onDragStart}
              onDrop={onDrop}
            />
          ))}
          <AddColumn addColumn={addColumn} />
        </div>
      </div>
    </div>
  );
};

export default Board;
