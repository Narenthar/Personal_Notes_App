import React from "react";
import ReactDOM from "react-dom";
import "./Note.css"

function Note(props){

    function onDelete(){
        return props.delete(props.id)
    }

    return <div className="note">
        <h1>{props.titleHead}</h1>
        <p>{props.contentHolder}</p>
        <button onClick={onDelete}>❌</button>
    </div>
}

export default Note;