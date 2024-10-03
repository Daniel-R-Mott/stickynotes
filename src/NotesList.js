import Note from "./Note.js";
import React from "react";

const NotesList = (props) => {
  const renderNote = (note) => <Note note={note} key={note.id} />;
  const noteElements = props.notes.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
