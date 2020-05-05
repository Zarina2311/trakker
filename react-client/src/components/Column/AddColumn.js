import React, { useState } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function AddColumn({ addColumn }) {
  const [newColumn, setNewColumn] = useState("");
  const [isFormShown, setIsFormShown] = useState(false);

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
      <div className="column-cancel-button">
        <Button color="info">Add Column</Button> &nbsp; &nbsp;
        <FontAwesomeIcon
          className="icon-cancel"
          icon="times"
          onClick={hideForm}
        />
      </div>
    </form>
  ) : (
    <div className="add-column-button" onClick={showForm}>
      <Button outline color="info">
        Add Column{" "}
      </Button>
    </div>
  );
}

export default AddColumn;
