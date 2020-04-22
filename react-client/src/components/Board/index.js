import React, { useState } from "react";
import AddBoard from "../Board/AddBoard";
import AddCard from "../Cards/AddCard";
import Card from "../Cards/Card";
import "./style.css";

// node demo
const _demoItem = document.createElement("div");
_demoItem.classList.add("demo-task");
let _textDemo = "";

// index to insert
let _indexInsert = -1;

const Board = () => {
  const [boards, setBoards] = useState([
    {
      id: 0,
      name: "Applied",
      tasks: [
        { id: 1, content: "test543" },
        { id: 2, content: "test679" },
      ],
    },
    {
      id: 1,
      name: "Phone",
      tasks: [
        { id: 4, content: "test77" },
        { id: 5, content: "test55" },
        { id: 6, content: "hyttt666" },
      ],
    },
    {
      id: 2,
      name: "On Site",
      tasks: [
        { id: 7, content: "test88" },
        { id: 8, content: "test3" },
      ],
    },
  ]);

  const onDragStart = (e) => {
    _textDemo = e.target.innerHTML;
    e.target.classList.add("drag-start");

    const indexTask = e.target.id;
    const indexList = e.target.parentNode.dataset.list;
    e.dataTransfer.setData("indexTask", indexTask);
    e.dataTransfer.setData("indexList", indexList);

    e.persist();
    setTimeout(() => {
      e.target.classList.add("hidden-item");
    }, 10);
  };

  const removeBorderBoard = () => {
    const boardHoverOld = document.getElementsByClassName("border-board")[0];
    if (boardHoverOld) {
      boardHoverOld.classList.remove("border-board");
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    removeBorderBoard();
    const col = e.target.closest(".col");
    col.classList.add("border-board");

    const nearItem = e.target.closest(".task");
    if (nearItem) {
      const position = nearItem.getBoundingClientRect();
      if (e.clientY <= position.top + position.height / 2) {
        nearItem.parentNode.insertBefore(_demoItem, nearItem);
        _indexInsert = parseInt(nearItem.id);

        // insert text demo
        const insertDom = setInterval(() => {
          _demoItem.innerHTML = _textDemo;
          clearInterval(insertDom);
        }, 10);
      } else if (e.clientY > position.bottom - position.height / 2) {
        nearItem.parentNode.insertBefore(_demoItem, nearItem.nextSibling);
        _indexInsert = parseInt(nearItem.id) + 1;
        const insertDom = setInterval(() => {
          _demoItem.innerHTML = _textDemo;
          clearInterval(insertDom);
        }, 10);
      }
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    removeBorderBoard();
    const indexListTarget = e.target.closest(".col").dataset.list;
    _demoItem.parentNode.removeChild(_demoItem);
    const indexTask = e.dataTransfer.getData("indexTask");
    const indexList = e.dataTransfer.getData("indexList");

    const taskPicked = boards[indexList].tasks[indexTask];

    const newBoards = [...boards];
    newBoards[indexListTarget].tasks.splice(_indexInsert, 0, taskPicked);
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

  return (
    <div>
      <h5>My Job Board</h5>
      <hr />
      <div className="shapeBoard">
        {boards.map((board, index) => (
          <div
            className="col"
            data-list={index}
            key={board.id}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            <p className="title-board">{board.name}</p>
            {board.tasks.map((task, index) => (
              <Card
                task={task}
                key={task.id}
                index={index}
                onDragStart={onDragStart}
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
