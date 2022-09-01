import React, { Component } from "react";

function TableRow(props) {
  const { rank, name, priceUsd, symbol, supply, changePercent24Hr } =
    props.row;

function priceUpdate(){
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
 
  });
  return formatter.format(priceUsd)
}


  return (
    <tr className="row">
      <td>{rank}</td>
      <td className="name">
        {name + " "} <span>{symbol}</span>
      </td>
      <td>{ priceUpdate()}</td>
      <td className={
       changePercent24Hr>0?"postive":"negative"
      }> <i className={`fa fa-sort-${changePercent24Hr>0? "asc" : "desc"}`}></i>{changePercent24Hr.substring(0,7)}</td>
      <td>{ `${supply}`}</td>
    </tr>
  );
}

export default TableRow;
