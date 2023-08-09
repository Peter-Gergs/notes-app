import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useState } from "react";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
function Notes({ notes }) {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
          return note;
        }
        return null;
      })
    );
  };
  useEffect(() => {
    handleSearch();
  }, [text]);

  return (
    <section>
      <header className="notes-header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {!showSearch && <CiSearch onClick={() => {handleSearch()}} />}
          {showSearch && <IoMdClose onClick={() => {setFilteredNotes(notes)}} />}
        </button>
      </header>
      <div className="notes-container">
        {filteredNotes.length > 0 
          ? filteredNotes.map((note) => <NoteItem key={note.id} note={note} />)
          : <p>There's no Notes Here</p>}
      </div>
      <Link className="btn add-btn" to={`/create-note`}>
        <BsPlusLg />
      </Link>
    </section>
  );
}

export default Notes;
