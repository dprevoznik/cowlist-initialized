import React from "react";
import ReactDOM from "react-dom";

export const UpdateForm = function(props) {
  return (
    <form onSubmit={props.onUpdate}>
        Old Name: <input type='text' name="originalName" value={props.originalName} onChange={props.onChange}></input>
        Name: <input type='text' name="updateName" value={props.updateName} onChange={props.onChange}></input>
        Description: <input type='text' name="updateDescription" value={props.updateDescription} onChange={props.onChange}></input>    
        <input type="submit" value="Update"/>
    </form>
  )
}