import React, { useState } from "react";
import AddBoard from "../Board/AddBoard";
import AddCard from "../Cards/AddCard";
import Card from "../Cards/Card";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

library.add(faTimesCircle);

let indexInsert = -1;

const Board = () => {
  const [boards, setBoards] = useState([
    {
      id: 0,
      name: "Applied",
      tasks: [
        { id: 1, content: "test1" },
        { id: 2, content: "test2" },
      ],
    },
    {
      id: 1,
      name: "Phone",
      tasks: [
        { id: 4, content: "test3" },
        { id: 5, content: "test4" },
        { id: 6, content: "test5" },
      ],
    },
    {
      id: 2,
      name: "On Site",
      tasks: [
        { id: 7, content: "test6" },
        { id: 8, content: "test7" },
      ],
    },
  ]);

  const onDragStart = (event) => {
    const indexTask = event.target.id;
    const indexList = event.target.parentNode.dataset.list;
    event.dataTransfer.setData("indexTask", indexTask);
    event.dataTransfer.setData("indexList", indexList);

    event.persist();
    setTimeout(() => {
      event.target.classList.add("hidden-item");
    }, 10);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    event.preventDefault();
    const indexListTarget = event.target.closest(".col").dataset.list;
    const indexTask = event.dataTransfer.getData("indexTask");
    const indexList = event.dataTransfer.getData("indexList");

    const taskPicked = boards[indexList].tasks[indexTask];

    const newBoards = [...boards];
    newBoards[indexListTarget].tasks.splice(indexInsert, 0, taskPicked);
    newBoards[indexList].tasks.splice(indexTask, 0);

    setBoards(newBoards);
  };

  const addCard = ({ indexColumn, content }) => {
    let newBoards = [...boards];
    newBoards[indexColumn].tasks.push({
      id: Math.floor(Math.random() * 1000),
      content: content,
    });
    setBoards(newBoards);
  };

  const addBoard = ({ name }) => {
    let newBoards = [...boards];
    newBoards.push({
      id: boards.length + 1,
      name: name,
      tasks: [],
    });
    setBoards(newBoards);
  };

  const deleteTaskFromBoard = (boardId, taskId) => {
    if (window.confirm("Are you sure?")) {
      let newBoards = [...boards]; // copy the state
      let newBoard = newBoards.find((board) => board.id === boardId); // find the right board
      newBoard.tasks = newBoard.tasks.filter((task) => task.id !== taskId); // remove the task
      setBoards(newBoards); // update the whole state with newBoards
    }
  };

  const deleteBoard = (boardId) => {
    if (window.confirm("Are you sure?")) {
      let newBoards = [...boards];
      newBoards = newBoards.filter((board) => board.id !== boardId);
      setBoards(newBoards);
    }
  };

  return (
    <div>
      <h5 className="title">My Job Board</h5>
      <hr />
      <div className="shape-board">
        {boards.map((board, index) => (
          <div
            className="col"
            data-list={index}
            key={board.id}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            <p className="title-board">
              {board.name}
              <FontAwesomeIcon
                className="icon-board"
                icon="times-circle"
                onClick={() => deleteBoard(board.id)}
              />
            </p>
            {board.tasks.map((task, index) => (
              <Card
                task={task}
                key={task.id}
                index={index}
                onDragStart={onDragStart}
                deleteItem={() => deleteTaskFromBoard(board.id, task.id)}
              />
            ))}
            <AddCard addCard={addCard} />
            <br />
          </div>
        ))}
        <AddBoard addBoard={addBoard} />
      </div>
    </div>
  );
};

export default Board;
