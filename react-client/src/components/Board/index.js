import React from "react";
import { Table } from "reactstrap";
import "./style.css";

function Board() {
  return (
    <div>
      <h5>My Job Board</h5>

      <Table responsive>
        {/* <thead> */}
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
        {/* </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody> */}
      </Table>
    </div>
  );
}
export default Board;
