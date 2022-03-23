import React from "react";
import ReactDOM from "react-dom";
import "./Note.css"

function Note(props){
    return <div className="note">
        <h1>{props.titleHead}</h1>
        <p>{props.contentHolder}</p>
    </div>
}

export default Note;