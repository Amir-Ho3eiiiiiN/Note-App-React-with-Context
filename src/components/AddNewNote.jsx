import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newNote = {
      id: Date.now(),
      title,
      description,
      completed: false,
      date: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    console.log(newNote);
    onAddNote(newNote);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 flex flex-col justify-center align-middle gap-6 border-2 border-yellow-500 rounded-lg px-4 py-8 min-h-72 max-h-72"
    >
      <h2 className="text-xl font-bold">AddNewNote</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 text-yellow-800 font-semibold border-gray-300 rounded-md py-1 px-4 focus:border-yellow-200  focus:outline-none focus:py-2 "
        type="text"
        placeholder="note title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 text-yellow-800 font-semibold border-gray-300 rounded-md py-1 px-4 focus:border-yellow-200  focus:outline-none focus:py-2 "
        type="text"
        placeholder="note description"
      />
      <button className="font-bold bg-yellow-500 rounded-md py-2 text-gray-700 hover:bg-yellow-400 hover:text-gray-900 hover:py-3">
        Add New Note
      </button>
    </form>
  );
}

export default AddNewNote;
