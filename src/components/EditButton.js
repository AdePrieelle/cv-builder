import React from "react";

const EditButton = (props) => {
  return (
    <button className="submit-edit-button" onClick={props.onClick}>
      Edit
    </button>
  );
};

export default EditButton;
