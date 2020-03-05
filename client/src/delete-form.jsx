import React from 'react';
import ReactDOM from 'react-dom';

export function DeleteForm(props) {
    return (
        <form onSubmit={props.handleDelete}>
            Name to Delete: <input type='text' name='deleteName' value={props.deleteName} onChange={props.onChange}></input>
            <input type='submit' value="Delete"/>
        </form>
    )
};