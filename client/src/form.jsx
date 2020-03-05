import React from "react";
import ReactDOM from "react-dom";

export const InputForm = function(props) {
  return (
    <form onSubmit={props.onSubmit}>
        Name: <input type='text' name="inputName" value={props.name}
              id="inputName" onChange={props.onChange}></input>
        Description: <input type='text' name="inputDescription" value={props.description} id="inputDescription"
                      onChange={props.onChange}></input>    
        <input type="submit" value="submit"/>
    </form>
  )
}