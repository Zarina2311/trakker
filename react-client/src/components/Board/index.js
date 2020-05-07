import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import AddColumn from "./AddColumn";
import Column from "../Column";
import { getColumns } from "../../api-fetcher";
import { useAuth0 } from "../../utils/react-auth0-spa";
import "./style.css";

library.add(faTimesCircle);

let indexInsert = -1;
const Board = () => {
  const [columns, setColumns] = useState([]);
  const { isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    if (user) {
      const userId = user.sub;
      getColumns({ userId }).then((_columns) =>
        setColumns(_columns.map((col) => ({ ...col, cards: [] })))
      );
    }
  }, [user]);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  const addColumn = ({ name }) => {
    // TODO add column via api, then refetch columns
    // optimistic update
    setColumns([...columns, { name, id: Math.random(), cards: [] }]);
  };

  const deleteColumn = (columnId) => {
    if (window.confirm("Are you sure?")) {
      // TODO delete column via API, then refetch columns
      // optimistic update
      setColumns([...columns].filter((column) => column.id !== columnId));
    }
  };

  const updateColumnCards = (columnIndex, cards) => {
    const newColumns = [...columns];
    newColumns[columnIndex].cards = cards;
    setColumns(newColumns);
  };

  const onDragStart = (event) => {
    const initialCardIndex = event.target.id;
    const initialColumnIndex = event.target.parentNode.dataset.columnIndex;
    event.dataTransfer.setData("initialCardIndex", initialCardIndex);
    event.dataTransfer.setData("initialColumnIndex", initialColumnIndex);

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
    const initialColumnIndex = event.dataTransfer.getData("initialColumnIndex");
    const initialCardIndex = event.dataTransfer.getData("initialCardIndex");
    const finalColumnIndex = event.target.closest(".col").dataset.columnIndex;

    const chosenCard = columns[initialColumnIndex].cards[initialCardIndex];
    // makes a copy
    const newColumns = [...columns];
    // insert the card in the new column
    newColumns[finalColumnIndex].cards.splice(indexInsert, 0, chosenCard);
    // delete the card from the old column
    newColumns[initialColumnIndex].cards.splice(initialCardIndex, 1);
    setColumns(newColumns);
  };

  return (
    <div className="page">
      <div className="page-top">
        <h5 className="Board-title">
          {user && (
            <img
              src={user.picture}
              style={{ borderRadius: "100%", marginRight: "1em" }}
              width="50"
            />
          )}
          {user ? user.given_name + "'s" : "My "} Board
        </h5>
        <Button onClick={logout} color="info">
          Log Out
        </Button>
      </div>
      <div className="page-bottom">
        <div className="columns">
          {columns.map((column, index) => (
            <Column
              cards={column.cards}
              key={column.id}
              id={column.id}
              name={column.name}
              columnIndex={index}
              onDragOver={onDragOver}
              onDragStart={onDragStart}
              onDeleteButtonClick={() => deleteColumn(column.id)}
              onDrop={onDrop}
              updateCards={(cards) => updateColumnCards(index, cards)}
            />
          ))}
          <AddColumn addColumn={addColumn} />
        </div>
      </div>
    </div>
  );
};

export default Board;
