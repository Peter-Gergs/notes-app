import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import useCreateDate from "../components/useCreateDate";

function CreateNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = { id: uuid(), title, details, date };
      //add Notes To notes Array
      setNotes((previosNote) => [note, ...previosNote]);
      navigate("/");
    } else if (title) {
      alert('please enter valid details')
    
    } else if (details) {
      alert('please enter valid title')
    } else {
      alert('enter a valid content')
    }
  };

  return (
    <section>
      <header className="create-note-header">
        <Link to="/notes-app" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
}

export default CreateNote;
