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
  return (
    <form className="" action="" onSubmit={handleSubmit}>
      <div className="">
        <label className="">Title</label>
        <input
          className=""
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="">
        <label className="">Description</label>
        <textarea
          className=""
          type="text"
          name="description"
          placeholder="Write anything..."
          value={formData.description}
          onChange={handleChange}
          style={{
            height: "300px",
            width: "400px",
          }}
        />
      </div>
      <button className="">Submit</button>
    </form>
  );
}
