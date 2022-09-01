import React, { Component } from "react";

function TableRow(props) {
  const { rank, name, priceUsd, symbol, maxSupply, changePercent24Hr } =
    props.row;

  return (
    <tr>
      <td>{rank}</td>
      <td>
        {name + " "} <span>{symbol}</span>
      </td>
      <td>{"$" + priceUsd}</td>
      <td>{changePercent24Hr}</td>
      <td>{maxSupply}</td>
    </tr>
  );
}

export default TableRow;
