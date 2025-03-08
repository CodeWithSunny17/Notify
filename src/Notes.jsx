import React, { useState, useEffect } from "react";
import List from "./Components/List";
import CreateNew from "./Components/CreateNew";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

export default function Notes() {
  const [page, setPage] = useState("create");
  const [enable, setEnable] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:2500/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes", error);
    }
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2500/create", formData);
      setFormData({
        title: "",
        description: "",
      });
      setEnable(false);
      setPage("list");
      fetchNotes();
    } catch (error) {
      console.error("Error creating note", error);
    }
    e.preventDefault();
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:2500/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note", error);
    }
  };

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:2500/notes/${editId}`, formData);
      setFormData({
        title: "",
        description: "",
      });
      setEditId(null);
      setPage("list");
      fetchNotes();
    } catch (error) {
      console.error("Error updating note", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center rounded-lg gap-14 py-8 bg-gray-100 min-h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={() => {
          setPage("list");
          setEnable(false);
          setFormData({
            title: "",
            description: "",
          });
        }}
      >
        Note List
      </button>

      {page === "list" ? (
        <List
          notes={notes}
          deleteNote={deleteNote}
          updateNote={updateNote}
          setFormData={setFormData}
          setEditId={setEditId}
          setPage={setPage}
          setEnable={setEnable}
        />
      ) : (
        <CreateNew
          editId={editId}
          formData={formData}
          enable={enable}
          setEnable={setEnable}
          handleChange={handleChange}
          createNote={createNote}
          updateNote={updateNote}
        />
      )}
      {page === "list" && (
        <button
          className="fixed right-2 bottom-2 p-4 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
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
