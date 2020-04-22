import React from "react";
import "./style.css";

function Card({ task, index, onDragStart }) {
  return (
    <div
      className="Card"
      draggable="true"
      id={index}
      onDragStart={(e) => onDragStart(e)}
    >
      {task.content}
    </div>
  );
}

export default Card;
