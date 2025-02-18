import React, { useState, useEffect } from "react";
import List from "./Components/List";
import CreateNew from "./Components/CreateNew";
// import "./style.css";

export default function Notes() {
  const [page, setPage] = useState("list");
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("events", JSON.stringify(updatedNotes));
  };

  const handleEdit = (id) => {
    const editedForm = notes.filter((note) => note.id === id);
    setPage("create");
    setFormData(...editedForm);
  };

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setNotes(JSON.parse(storedEvents));
    }
  }, []);

  return (
    <div className="">
      <div className="">
        <button
          className=""
          onClick={() => {
            setPage("list");
          }}
        >
          Note List
        </button>
        {page === "list" && (
          <button
            className=""
            onClick={() => {
              setPage("create");
            }}
          >
            Create New Note
          </button>
        )}
      </div>
      {page === "list" ? (
        <List
          notes={notes}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <CreateNew
          setPage={setPage}
          setNotes={setNotes}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}
