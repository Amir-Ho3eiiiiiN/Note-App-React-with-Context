import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";

function reducerNote(state, { type, payload }) {
  switch (type) {
    case "add": {
      return [...state, payload];
    }
    case "delete": {
      return [...state].filter((state) => state.id !== payload);
    }
    case "completed": {
      return [...state].map((state) =>
        state.id === payload ? { ...state, completed: !state.completed } : state
      );
    }
    default:
      throw new Error("unknown error :" + type);
  }
}

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(reducerNote, []);
  const [sortBy, setSortBy] = useState("Latest");

  const handlerAddNote = (newNote) => {
    // setNotes((prev) => [...prev, newNote]);
    dispatch({ type: "add", payload: newNote });
  };

  const handlerToggleNote = (noteId) => {
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
    dispatch({ type: "completed", payload: noteId });
  };

  const handlerDeleteNote = (noteId) => {
    // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    dispatch({ type: "delete", payload: noteId });
  };

  const handlerChangeSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col ">
      <NoteHeader sortBy={sortBy} onSort={handlerChangeSort} />
      <div className="flex flex-row gap-4 flex-grow">
        <AddNewNote onAddNote={handlerAddNote} />
        <div className="flex-1 rounded-lg border-2 border-yellow-500">
          <NoteList
            notes={notes}
            onToggleCompleted={handlerToggleNote}
            onDeleteNotes={handlerDeleteNote}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
