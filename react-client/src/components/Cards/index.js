import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Card = ({ content, id, onDragStart, deleteItem }) => {
  return (
    <div className="Card" draggable="true" id={id} onDragStart={onDragStart}>
      <div className="icon-card" onClick={deleteItem}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
      {content}
    </div>
  );
};

export default Card;
