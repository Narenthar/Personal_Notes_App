import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import "./App.css"
import initial_notes from "../notes"
import CreateArea from "./CreateArea"


function App(){

    const [notes, setNotes] = useState(initial_notes)


    function addNotes(newNote){
        setNotes(() => {
            return [...notes, newNote];
});
    }

    function deleteNotes(id){
setNotes((prevValue)=>{return prevValue.filter((item,index)=> index!==id)})
    }

        return <div>
        <Header />
        <CreateArea onAdd={addNotes} />
        <div>
        {notes.map( (noteItem,index) =>  <Note 
        key = {index}
        id = {index}
        titleHead = {noteItem.title}
        contentHolder = {noteItem.content} 
        delete = {deleteNotes}/> )}
        </div>
        <Footer />
    </div>
}

export default App;