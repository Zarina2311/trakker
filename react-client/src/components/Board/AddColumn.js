import React, { useState } from "react";
import { Button } from "reactstrap";
import "./style.css";

function AddColumn({ addColumn }) {
  const [newColumn, updateNewColumn] = useState("");
  const [isAdd, updateIsAdd] = useState(false);

  const showAdd = () => {
    updateIsAdd(!isAdd);
  };

  const addMoreColumn = (event) => {
    event.preventDefault();
    if (newColumn) {
      addColumn({ name: newColumn });
      updateNewColumn("");
      updateIsAdd(false);
    }
  };

  return !isAdd ? (
    <div className="add-column-button" onClick={showAdd}>
      <Button outline color="info">
        Add Column{" "}
      </Button>
    </div>
  ) : (
    <form className="add-column" onSubmit={addMoreColumn}>
      <input
        className="input-card"
        type="text"
        placeholder="Enter your column name"
        onChange={(event) => updateNewColumn(event.target.value)}
      />
      <div className="column-cancel-button">
        <Button color="info">Add Column</Button> &nbsp; &nbsp;
        <Button color="info">Cancel</Button>
      </div>
    </form>
  );
}

export default AddColumn;
