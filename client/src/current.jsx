import React from "react";
import ReactDOM from "react-dom";

export function CurrentCow(props) {
  //take in props and parse out name and description
  return (
    <div class='currentCow'>
      <div>Meet {props.cow.name}!!! They are {props.cow.description}</div>
    </div>
  )    
}