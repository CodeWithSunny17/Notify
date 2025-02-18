import React from "react";

export default function CreateNew({ formData, handleSubmit, handleChange }) {
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
