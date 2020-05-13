import React, { useEffect } from "react";
import AddCard from "../Cards/AddCard";
import Card from "../Cards";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCardsForColumn } from "../../api-fetcher";
import "./style.css";

library.add(faTimesCircle);

const Column = ({
  id,
  cards,
  name,
  columnIndex,
  onDragOver,
  onDragStart,
  onDeleteButtonClick,
  onDrop,
  updateCards,
}) => {
  useEffect(() => {
    getCardsForColumn({
      auth0_id: 1,
      columnId: id,
    }).then((_cards) => updateCards(_cards));
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const addCard = ({ content }) => {
    // optimistic update
    updateCards([...cards, { content, id: Math.random() }]);
    // TODO add card via api, then refetch cards for this column
  };

  const deleteCard = (cardId) => {
    if (window.confirm("Are you sure?")) {
      // optimistic update
      updateCards([...cards].filter((card) => card.id !== cardId));
      // TODO delete card via api, then refetch cards for this column
    }
  };

  return (
    <div
      className="col"
      data-column-index={columnIndex}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <p className="title-column">
        {name}
        <FontAwesomeIcon
          className="icon-column"
          icon="times-circle"
          onClick={onDeleteButtonClick}
        />
      </p>
      {cards.map((card, index) => (
        <Card
          content={card.content}
          key={card.id}
          index={index}
          onDragStart={onDragStart}
          deleteItem={() => deleteCard(card.id)}
        />
      ))}
      <AddCard addCard={addCard} />
      <br />
    </div>
  );
};

export default Column;
