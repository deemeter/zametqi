import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateNote, EditNote, Notes } from "./pages";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [
      {
        id: "1",
        title: "Click me",
        details:
          "В этом приложении я реализовал базовый функционал для хранения заметок. Можно создавать, редактировать и удалять заметки. Для хранения заметок я использовал local storage. Приложение создано на React с использованием react-router-dom/react-icons/uuid",
        date: "Oct 26, 2023 [00:00]",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
