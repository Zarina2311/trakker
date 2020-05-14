import React, { useState } from "react";
import { Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

library.add(faTimes);

function AddCard({ addCard }) {
  const [newCard, setNewCard] = useState("");
  const [isFormShown, setIsFormShown] = useState(false);

  const showForm = () => setIsFormShown(true);
  const hideForm = () => setIsFormShown(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCard) {
      addCard(newCard);
      setNewCard("");
      setIsFormShown(false);
    }
  };

  return isFormShown ? (
    <form className="add-card" onSubmit={handleSubmit}>
      <input
        autoFocus
        className="input-card"
        type="text"
        placeholder="Enter your card name"
        onChange={(event) => setNewCard(event.target.value)}
      />
      <br />
      <Button color="info">Add Card</Button> &nbsp; &nbsp;
      <FontAwesomeIcon
        className="icon-cancel"
        icon="times"
        onClick={hideForm}
      />
    </form>
  ) : (
    <Button
      className="rounded-button tn-lg btn-block"
      color="info"
      onClick={showForm}
    >
      Add Card
    </Button>
  );
}
export default AddCard;
