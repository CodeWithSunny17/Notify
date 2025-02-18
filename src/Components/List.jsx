import React from "react";

export default function List({ notes, handleEdit, handleDelete }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 space-y-4">
      {notes &&
        notes.map((note) => (
          <div
            className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-300"
            key={note.id}
          >
            {/* <p className="text-gray-500 font-medium">{note.id}</p> */}
            <p className="text-lg font-semibold text-gray-800">{note.title}</p>
            <p className="text-gray-600 flex-1">{note.description}</p>
            <button
              className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              onClick={() => handleEdit(note.id)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
