import React from "react";

export default function List({ notes, handleEdit, handleDelete }) {
  return (
    <div className="">
      {notes &&
        notes.map((note) => (
          <div className="" key={note.id}>
            <p className="">{note.id}</p>
            <p className="">{note.title}</p>
            <p className="">{note.description}</p>
            <button className="" onClick={() => handleEdit(note.id)}>
              Edit
            </button>
            <button className="" onClick={() => handleDelete(note.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
