import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    image: "",
    price: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      image: "",
      price: ""
    });
    document.getElementById("title").focus();
    event.preventDefault();
  }

  return (
    <div className="mt-5 form-group p-4 card shadow-x">
      <form>
        <div>
          <input
            id="title"
            required
            className="form-control"
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        </div>
        <div className="mt-2 mb-2">
          <input
            required
            className="form-control"
            type="text"
            name="image"
            placeholder="Image URL"
            value={note.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className="form-control"
            type="text"
            name="price"
            placeholder="Price per Night $"
            value={note.price}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="form-control mt-2"
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        ></textarea>
        <button className="shadow btn-add btn btn-add" onClick={submitNote}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
