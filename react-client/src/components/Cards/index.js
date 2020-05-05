import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const Card = ({ content, index, onDragStart, deleteItem }) => {
  return (
    <div className="Card" draggable="true" id={index} onDragStart={onDragStart}>
      <FontAwesomeIcon
        className="icon-card"
        icon="times-circle"
        onClick={deleteItem}
      />
      {content}
    </div>
  );
};

export default Card;
