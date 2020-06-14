import React from "react";
import AddCard from "../Cards/AddCard";
import Card from "../Cards";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBoard from "../../useBoard";
import "./style.css";

export const Column = ({
  id,
  name,
  onDragOver,
  onDragStart,
  onDrop,
  addCard,
  deleteCard,
  deleteColumn,
  cards,
}) => {
  return (
    <div
      className="col"
      data-column-id={id}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <p className="title-column">
        {name}

        <span className="icon-column" onClick={() => deleteColumn(id)}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
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

const Connector = ({ id, name, onDragOver, onDragStart, onDrop }) => {
  const { getCards, addCard, deleteCard, deleteColumn } = useBoard();
  const cards = getCards(id);
  return (
    <Column
      id={id}
      name={name}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrop={onDrop}
      addCard={addCard}
      deleteCard={deleteCard}
      deleteColumn={deleteColumn}
      cards={cards}
    />
  );
};

export default Connector;
