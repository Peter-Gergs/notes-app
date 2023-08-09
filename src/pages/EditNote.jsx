import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import usecreateDate from "../components/useCreateDate";

function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  console.log(note);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = usecreateDate();
  const navigate = useNavigate();
  // handling Saving Form
  const handleForm = (e) => {
    e.preventDefault();
    //Form Validation
    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    //back to home page
    navigate("/");
  };

  // Delete note

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete?`)) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note-header">
        <Link to="/notes-app" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

export default EditNote;
