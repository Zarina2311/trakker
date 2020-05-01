import React, { useState } from "react";
import { Button } from "reactstrap";

function AddCard({ addCard }) {
  const [newTask, updateNewTask] = useState("");
  const [isAdd, updateIsAdd] = useState(false);

  const showAdd = () => {
    updateIsAdd(!isAdd);
  };

  const addMoreTask = (event) => {
    event.preventDefault();
    if (newTask) {
      const col = event.target.closest(".col");
      addCard({
        indexColumn: col.dataset.list,
        content: newTask,
      });
      updateNewTask("");
      updateIsAdd(false);
    }
  };

  return !isAdd ? (
    <div>
      <Button
        className="rounded-button tn-lg btn-block"
        color="info"
        onClick={() => showAdd()}
      >
        Add Card
      </Button>
    </div>
  ) : (
    <div className="add-card">
      <form onSubmit={(event) => addMoreTask(event)}>
        <input
          autoFocus
          className="input-card"
          type="text"
          placeholder="Enter your card name"
          onChange={(event) => updateNewTask(event.target.value)}
        />
        <br />
        <Button color="info">Add Card</Button> &nbsp; &nbsp;
        <Button color="info">Cancel</Button>
      </form>
    </div>
  );
}

export default AddCard;
