import React from "react";
import "../styles/AddButton.scss"

const DeleteButton = (props) => {
  return (
    <button className="add-button" onClick={props.onClickHandleAddFields}>Add</button>
  );
};

export default DeleteButton;
