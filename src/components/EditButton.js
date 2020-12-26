import React from "react";
import "../styles/SubmitEditButton.scss"

const EditButton = (props) => {
  return (
    <button className="submit-edit-button" onClick={props.onClick}>
      Edit
    </button>
  );
};

export default EditButton;
