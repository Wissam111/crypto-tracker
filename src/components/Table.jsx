import React, { Component } from "react";
import { useState } from "react";
import TableRow from "./TableRow";
function Table() {
  const [sort, setSort] = useState("Desc");
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.coincap.io/v2/assets");
    const d = await res.json();
  setData(d.data);
  }
  React.useEffect(() => {
   fetchData();
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
     fetchData();
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className="table-container">
      <h1>Crypto Live Tracker</h1>
      <table width="50%">
        <tr>
          <th>
            #
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
