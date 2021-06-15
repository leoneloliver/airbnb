import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (

    <div className="card mb-3 col-12 p-0">
      <div className="row no-gutters horizontal">
        <div className="col-md-3 img-container">
          <img src={props.image} className="card-img" alt={props.title} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <p className="card-text"><small className="text-muted">${props.price}</small></p>
          </div>
          <button
            onClick={handleClick}
            className="btn-delete shadow btn-danger"
          >
            <FaTrashAlt/>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Note;
