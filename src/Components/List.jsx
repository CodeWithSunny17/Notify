import React from "react";
import Card from "./Card";
export default function List({ notes, handleEdit, handleDelete }) {
  return (
    <div className="w-full max-w-lg mx-auto mt-6 space-y-4">
      {notes &&
        notes.map((note, i) => (
          <Card
            key={i}
            note={note}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
    </div>
  );
}
