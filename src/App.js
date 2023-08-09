import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/notes-app" element={<Notes notes={notes} />} />
          <Route
            path="/notes-app/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/notes-app/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
