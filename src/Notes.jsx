import React, { useState, useEffect } from "react";
import List from "./Components/List";
import CreateNew from "./Components/CreateNew";
import { FaPlus } from "react-icons/fa6";

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
    <div className="relative flex flex-col items-center rounded-lg gap-4 py-8 bg-gray-100 min-h-screen">
      {/* <div className="flex gap-4 relative"> */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={() => {
          setPage("list");
        }}
      >
        Note List
      </button>

      {/* </div> */}
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
      {page === "list" && (
        <button
          className="fixed right-20 bottom-20 p-4 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
          onClick={() => {
            setPage("create");
          }}
        >
          <FaPlus className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
