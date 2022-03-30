import React, {useState} from "react";
import "./CreateArea.css"

function CreateArea(props){

const [title, setTitle] = useState("")
const [textarea, setTextArea] = useState("")
const newNote = {
    title : title,
    content : textarea
}


    return <div>
        <form>
            <input onChange={(event)=> setTitle(event.target.value)} name="title" placeholder="Enter a title" value={title} />
            <textarea onChange={(event)=>setTextArea(event.target.value)} name="textarea" placeholder="Enter the content..." rows="3" value={textarea} />
            <button onClick={()=> {props.onAdd(newNote)}}>Add</button>
        </form>
    </div>
}

export default CreateArea;