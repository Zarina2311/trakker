import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function Card({ card, index, onDragStart, deleteItem }) {
  return (
    <div
      className="Card"
      draggable="true"
      id={index}
      onDragStart={(e) => onDragStart(e)}
    >
      <FontAwesomeIcon
        className="icon-card"
        icon="times-circle"
        onClick={deleteItem}
      />
      {card.content}
    </div>
  );
}

export default Card;
