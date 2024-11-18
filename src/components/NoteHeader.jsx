function NoteHeader({ onSort }) {
  return (
    <header className="bg-yellow-800 rounded-2xl text-white flex justify-around p-4 mt-1 mb-8">
      <h2 className="text-3xl font-bold">My Notes (0)</h2>
      <select
        onChange={onSort}
        className="bg-yellow-500 rounded-xl px-3 cursor-pointer text-gray-800"
      >
        <option value="Latest">Sorted Based on Last Notes</option>
        <option value="Earlast">Sorted Based on Earlast Notes</option>
        <option value="Completed">Sorted Based on Completed Notes</option>
      </select>
    </header>
  );
}

export default NoteHeader;
