import React from "react";

export default function Card({
  note,
  deleteNote,
  setFormData,
  setEditId,
  setPage,
  setEnable,
}) {
  return (
    <div
      className="flex flex-col items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-300"
      key={note.id}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg font-semibold text-gray-800">{note.title}</p>
        <p className="text-gray-600 flex-1">{note.description}</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          onClick={() => {
            setFormData({
              title: note.title,
              description: note.description,
            });
            setEditId(note._id);
            setPage("create");
            setEnable(true);
          }}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => deleteNote(note._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
