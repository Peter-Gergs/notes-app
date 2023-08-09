import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ note }) {
  return (
    <Link to={`/notes-app/edit-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 50 ? `${note.title.substr(0, 50)}...` : note.title}
      </h4>
      <p>
        {note.details.length > 40
          ? `${note.details.substr(0, 40)}...`
          : note.details}
      </p>
      <p>{note.date}</p>
    </Link>
  );
}

export default NoteItem;
