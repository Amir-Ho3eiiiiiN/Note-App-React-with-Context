import { TrashIcon } from "@heroicons/react/24/solid";
import NoteStatus from "./NoteStatus";
import Message from "./Message";

function NoteList({ notes, onToggleCompleted, onDeleteNotes, sortBy }) {
  let sortedNotes = [];
  console.log(sortBy);
  switch (sortBy) {
    case "Latest": {
      sortedNotes = [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    }
    case "Earlast": {
      sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    }
    case "Completed": {
      sortedNotes = [...notes].sort(
        (a, b) => Number(a.completed) - Number(b.completed)
      );
      break;
    }
  }
  return (
    <>
      {notes.length > 0 ? (
        <NoteStatus notes={notes} />
      ) : (
        <Message>
          <p className="pt-8">no Notes has already been added. 😉</p>
        </Message>
      )}
      <div className="py-4 px-2">
        {sortedNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDeleteNotes={onDeleteNotes}
            onToggleCompleted={onToggleCompleted}
          />
        ))}
      </div>
    </>
  );
}

export default NoteList;

function NoteItem({ note, onToggleCompleted, onDeleteNotes }) {
  return (
    <div className=" border border-yellow-200 rounded-md mb-2 p-4 pb-2">
      <div className="flex justify-between mb-2">
        <div className="text-left">
          <h2
            className={`text-lg font-bold mb-1 ${
              note.completed ? "line-through" : ""
            }`}
          >
            {note.title}
          </h2>
          <p className="text-md text-gray-500">{note.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            checked={note.completed}
            onChange={() => onToggleCompleted(note.id)}
            type="checkbox"
            className="hover:cursor-pointer w-4 h-4"
          ></input>
          <TrashIcon
            onClick={() => onDeleteNotes(note.id)}
            className="size-5 text-red-600 hover:cursor-pointer hover:text-red-400"
          />
        </div>
      </div>
      <p className="border-t text-gray-400 text-sm pt-1">
        {new Date(note.date).toLocaleString("en", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
}
