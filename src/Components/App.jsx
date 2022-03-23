import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import "./App.css"
import notes from "../notes"


function App(){

        return <div>
        <Header />
        <div>
        {notes.map( noteItem =>  <Note 
        key = {noteItem.key}
        titleHead = {noteItem.title}
        contentHolder = {noteItem.content} /> )}
        </div>
        <Footer />
    </div>
}

export default App;