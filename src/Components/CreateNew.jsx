import React, { useState } from "react";

export default function CreateNew({
  setPage,
  setNotes,
  formData,
  setFormData,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setNotes((prev) => {
      // const revisedVal = prev.filter((item) => item.id !== formData.id);
      // const newNote = { ...formData, id: Date.now() };
      // const updatedNotes = [...revisedVal, newNote];

      const prevId = formData.id !== "" ? formData.id : Date.now();
      const revisedVal = prev.filter((item) => item.id !== formData.id);
      const updatedNotes = [...revisedVal, { ...formData, id: prevId }];
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

  return (
    <form
      className="w-full max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg space-y-4"
      action=""
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Title</label>
        <input
          className="bg-slate-100 text-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          name="title"
          placeholder="Enter title..."
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Description</label>
        <textarea
          className="bg-slate-100 text-gray-700 border border-gray-300 rounded-lg px-3 py-2 h-48 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="description"
          placeholder="Write anything..."
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Submit
      </button>
    </form>
  );
}
