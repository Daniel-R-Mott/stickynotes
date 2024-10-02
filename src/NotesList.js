import Note from "./Note.js"
import React from "react";

const NotesList = () => {
    return(
        <ul className="notes-list">
            <Note />
            <Note />
            <Note />
        </ul>
    )
}

export default NotesList;