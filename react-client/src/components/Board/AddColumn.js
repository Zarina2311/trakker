import React, { useState } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function AddColumn({ addColumn, isFormShownDefault = false }) {
  const [newColumn, setNewColumn] = useState("");
  const [isFormShown, setIsFormShown] = useState(isFormShownDefault);

  const showForm = () => setIsFormShown(true);
  const hideForm = () => setIsFormShown(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newColumn) {
      addColumn({ name: newColumn });
      setNewColumn("");
      setIsFormShown(false);
    }
  };

  return isFormShown ? (
    <form className="add-column" onSubmit={handleSubmit}>
      <input
        autoFocus
        className="input-card"
        type="text"
        placeholder="Enter your column name"
        onChange={(event) => setNewColumn(event.target.value)}
      />
      <div>
        <Button color="info">Add Column</Button> &nbsp; &nbsp;
        <FontAwesomeIcon
          className="icon-cancel"
          icon={faTimes}
          onClick={hideForm}
        />
      </div>
    </form>
  ) : (
    <div className="add-column-button">
      <Button outline color="info" onClick={showForm}>
        Add Column{" "}
      </Button>
    </div>
  );
}

export default AddColumn;
