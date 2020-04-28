import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function Card({ task, index, onDragStart, deleteItem }) {
  return (
    <div
      className="Card"
      draggable="true"
      id={index}
      onDragStart={(e) => onDragStart(e)}
    >
      {task.content}
      <FontAwesomeIcon
        className="icon-card"
        icon="times-circle"
        onClick={deleteItem}
      />
    </div>
  );
}

export default Card;
