import React from "react";
import "../styles/EditButton.scss"

const EditButton = (props) => {
  return (
    // <button className="submit-edit-button" onClick={props.onClick}>
    //   Edit
    // </button>
    // <button className="edit-button" onClick={props.onClick}>
      <i className="fas fa-edit edit-icon" onClick={props.onClick}></i>
    // </button>
  );
};

export default EditButton;
