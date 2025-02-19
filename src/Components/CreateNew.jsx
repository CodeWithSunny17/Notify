import React from "react";

export default function CreateNew({
  setPage,
  setNotes,
  formData,
  setFormData,
  enable,
  setEnable,
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
      setEnable(false);
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
      className="w-full flex flex-col justify-center items-center max-w-lg mx-auto bg-white p-4 shadow-md rounded-lg space-y-4"
      action=""
      onSubmit={handleSubmit}
    >
      <input
        className="w-full bg-slate-100 text-gray-700 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        name="title"
        placeholder={enable ? "Title" : "Create New..."}
        value={formData.title}
        onChange={handleChange}
        onClick={() => {
          setEnable(true);
        }}
      />

      {enable && (
        <textarea
          className="bg-slate-100 text-gray-700 border border-gray-300 rounded-lg px-3 py-2 h-48 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="description"
          placeholder="Write anything..."
          value={formData.description}
          onChange={handleChange}
        />
      )}

      {enable && (
        <button className="w-2/3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Create
        </button>
      )}
    </form>
  );
}
