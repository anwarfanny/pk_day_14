import React from "react";

const Table = (props) => {
  const { todo, remove, update } = props;

  const mapdata = todo.map((data, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{data.daya}</td>
        <td>{data.Activies}</td>
        <td>
          <button className="btn btn-danger" onClick={() => remove(daya.id)}>
            Delete
          </button>
          &nbps;
          <button className="btn btn-primary" onClick={() => update(data.id)}>
            update
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
