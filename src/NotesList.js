import Note from "./Note.js";
import React from "react";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);
  const renderNote = (note) => (
    <Note note={note} key={note.id} onType={props.onType} />
  );
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
