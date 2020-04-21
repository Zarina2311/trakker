import React from "react";
import { Table } from "reactstrap";
import Cards from "../Cards/Cards";
import Board from "../Board";
import "./style.css";

function HomeBoard() {
  return (
    <div>
      <h5>My Job Board</h5>

      <Table responsive>
        <tr>
          <th></th>
          <th>Applied</th>
          <th>Phone 1</th>
          <th>Phone 2</th>
          <th>On Site</th>
          <th>Waiting</th>
          <th>Offer</th>
          <th>Rejected</th>
          <th>Saved</th>
        </tr>
      </Table>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Cards id="card-1" className="card" draggable="true">
            <p>Card one</p>
          </Cards>
        </Board>
        <Board id="board-2" className="board">
          <Cards id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Cards>
        </Board>
        <Board id="board-3" className="board">
          <Cards id="card-3" className="card" draggable="true">
            <p>Card three</p>
          </Cards>
        </Board>
        <Board id="board-4" className="board">
          <Cards id="card-4" className="card" draggable="true">
            <p>Card four</p>
          </Cards>
        </Board>
        <Board id="board-5" className="board">
          <Cards id="card-5" className="card" draggable="true">
            <p>Card five</p>
          </Cards>
        </Board>
        <Board id="board-6" className="board">
          <Cards id="card-6" className="card" draggable="true">
            <p>Card six</p>
          </Cards>
        </Board>
      </main>
    </div>
  );
}
export default HomeBoard;
