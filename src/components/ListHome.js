import React from "react";

const ListHome = (props) => {
 
  return (
    <div className="col-md-4 p-2">
      <div className="card shadow-sm">
        <div className="img-container">
          <img src={props.image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="mb-2 text-muted">{props.content}</p>
          <p className="mb-2 text-muted"><span>${props.price}</span> per night</p>
        </div>
      </div>
    </div>
  );
};

export default ListHome;
