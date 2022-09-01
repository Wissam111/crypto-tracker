import React, { Component } from "react";
import { useState } from "react";
import TableRow from "./TableRow";
function Table() {
  const [sort, setSort] = useState(0);
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.coincap.io/v2/assets");
    const d = await res.json();
    sortDataByrank(d.data);
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  });

  function sortDataByrank(dataObject) {
    let _data = [];
    dataObject.forEach((row) => {
      _data.splice();
      _data.splice(parseInt(row.rank, 10), 0, row);
    });
    console.log("1", _data);

    if (sort) {
      _data.sort((a, b) => parseInt(b.rank, 10) - parseInt(a.rank, 10));
    }
    // console.log("2", _data);
    // _data = !sort
    //   ? _data
    //   : _data.sort((a, b) => parseInt(b.rank, 10) - parseInt(a.rank, 10));

    setData(_data);
  }
  function handleSort() {
    console.log(sort);
    setSort(!sort);
    // sortDataByrank(data);
  }

  return (
    <div className="table-container">
      <table width="50%">
        <tr>
          <th>
            #{" "}
            <button onClick={handleSort}>
              <i className={`fa fa-sort-${!sort ? "asc" : "desc"}`}></i>
            </button>
          </th>
          <th>Name</th>
          <th>Price</th>
          <th>24h%</th>
          <th>max Supply</th>
        </tr>

        {data.map((row) => {
          return <TableRow key={row.name} row={row} />;
        })}
      </table>
    </div>
  );
}

export default Table;
