function NoteStatus({notes}) {
  const allNotes = notes.length;
  const completedNotes = notes.filter(item=>item.completed===true).length;
  const openNotes = allNotes - completedNotes;
  return (
    <>
      <div className="py-4 border-b-2 border-yellow-200">
        <ul className="flex justify-around">
          <li>All ({allNotes})</li>
          <li>Completed ({completedNotes})</li>
          <li>Open ({openNotes})</li>
        </ul>
      </div>
    </>
  );
}

export default NoteStatus;
