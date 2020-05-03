import React, { useState } from "react";
import AddColumn from "./AddColumn";
import AddCard from "../Cards/AddCard";
import Card from "../Cards/Card";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

library.add(faTimesCircle);

let indexInsert = -1;

const Column = () => {
  const [columns, setColumns] = useState([
    {
      id: 0,
      name: "Applied",
      cards: [
        { id: 1, content: "Google" },
        { id: 2, content: "Facebook" },
      ],
    },
    {
      id: 1,
      name: "Phone",
      cards: [
        { id: 4, content: "Indeed" },
        { id: 5, content: "Zoom" },
        { id: 6, content: "Amazon" },
      ],
    },
    {
      id: 2,
      name: "On Site",
      cards: [
        { id: 7, content: "Netflix" },
        { id: 8, content: "LinkedIn" },
      ],
    },
  ]);

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
    // make a copy because you can't edit react state variables directly
    const newColumns = [...columns];
    // insert the chosen card at the specified location in the card array
    newColumns[finalColumnIndex].cards.splice(indexInsert, 0, chosenCard);
    // deletes the card from the old column
    newColumns[initialColumnIndex].cards.splice(initialCardIndex, 1);
    setColumns(newColumns);
  };

  const addCard = ({ indexColumn, content }) => {
    let newColumns = [...columns];
    newColumns[indexColumn].cards.push({
      id: Math.floor(Math.random() * 1000),
      content: content,
    });
    setColumns(newColumns);
  };

  const addColumn = ({ name }) => {
    let newColumns = [...columns];
    newColumns.push({
      id: columns.length + 1,
      name: name,
      cards: [],
    });
    setColumns(newColumns);
  };

  const deleteCardFromColumn = (columnId, cardId) => {
    if (window.confirm("Are you sure?")) {
      // copy the state
      let newColumns = [...columns];
      // find the right column
      let newColumn = newColumns.find((column) => column.id === columnId);
      // remove the card
      newColumn.cards = newColumn.cards.filter((card) => card.id !== cardId);
      // update the whole state with newColumns
      setColumns(newColumns);
    }
  };

  const deleteColumn = (columnId) => {
    if (window.confirm("Are you sure?")) {
      let newColumns = [...columns];
      newColumns = newColumns.filter((column) => column.id !== columnId);
      setColumns(newColumns);
    }
  };

  return (
    <div className="page">
      <div className="page-top">
        <h5 className="title">My Job Board</h5>
      </div>
      <div className="page-bottom">
        <div className="columns">
          {columns.map((column, index) => (
            <div
              className="col"
              data-column-index={index}
              key={column.id}
              onDragOver={onDragOver}
              onDrop={onDrop}
            >
              <p className="title-column">
                {column.name}
                <FontAwesomeIcon
                  className="icon-column"
                  icon="times-circle"
                  onClick={() => deleteColumn(column.id)}
                />
              </p>
              {column.cards.map((card, index) => (
                <Card
                  card={card}
                  key={card.id}
                  index={index}
                  onDragStart={onDragStart}
                  deleteItem={() => deleteCardFromColumn(column.id, card.id)}
                />
              ))}
              <AddCard addCard={addCard} />
              <br />
            </div>
          ))}
          <AddColumn addColumn={addColumn} />
        </div>
      </div>
    </div>
  );
};

export default Column;
