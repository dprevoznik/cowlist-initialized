import React from "react";
import ReactDOM from "react-dom";

export const InputForm = function(props) {
  return (
    <form onSubmit={props.onSubmit}>
        Name: <input type='text' id="inputName"></input>
        Description: <input type='text' id="inputDescription"></input>    
        <input type="submit" value="submit"/>
    </form>
  )
}