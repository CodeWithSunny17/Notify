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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setNotes((prev) => {
      const revisedVal = prev.filter((item) => item.id !== formData.id);
      const newNote = { ...formData, id: Date.now() };
      const updatedNotes = [...revisedVal, newNote];
      localStorage.setItem("events", JSON.stringify(updatedNotes));
      return updatedNotes;
    });

    setFormData({
      id: "",
      title: "",
      description: "",
    });
    setPage("list");
    e.preventDefault();
  };

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
      // console.log(setNotes);
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
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}
