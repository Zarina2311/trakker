import React from "react";
import AddCard from "../Cards/AddCard";
import Card from "../Cards";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBoard from "../../useBoard";
import "./style.css";

library.add(faTimesCircle);

const Column = ({ id, name, onDragOver, onDragStart, onDrop }) => {
  const { getCards, addCard, deleteCard, deleteColumn } = useBoard();
  const cards = getCards(id);

  return (
    <div
      className="col"
      data-column-id={id}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <p className="title-column">
        {name}
        <FontAwesomeIcon
          className="icon-column"
          icon="times-circle"
          onClick={() => deleteColumn(id)}
        />
      </p>
      {cards.map((card) => (
        <Card
          id={card.id}
          content={card.name}
          key={card.id}
          onDragStart={onDragStart}
          deleteItem={() => deleteCard({ columnId: id, cardId: card.id })}
        />
      ))}
      <AddCard addCard={(name) => addCard({ columnId: id, name })} />
      <br />
    </div>
  );
};

export default Column;
