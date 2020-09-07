import React from "react";
import { unstable_batchedUpdates } from "react-dom";

const Table = (props) => {
  const mapdata = todo.map((data, index) => {
    return (
      <tr key={data.id}>
        <th scope="row">{index + 1}</th>
        <td>{data.list}</td>
        <td>{data.Activites}</td>
        <td>
          <button className="btn btn-danger" onClick={() => remove(daya.id)}>
            Delete
          </button>
          &nbps;
          <button className="btn btn-secondary" onClick={() => update(data.id)}>
            Edit
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Day</th>
            <th scope="col">Activites</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{mapData}</tbody>
      </table>
    </div>
  );
};
export default Table;

export default Table;
