import React from "react";
import "../styles/EditButton.scss";

const EditButton = (props) => {
  return (
      <i className="fas fa-edit edit-icon" onClick={props.onClick}></i>
  );
};

export default EditButton;
