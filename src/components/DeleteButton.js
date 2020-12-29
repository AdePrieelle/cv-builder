import React from "react";
import "../styles/DeleteButton.scss"

const DeleteButton = (props) => {
  return (
    // <button className="submit-edit-button" onClick={props.onClick}>
    //   Edit
    // </button>
    // <button className="edit-button" onClick={props.onClick}>
      // <i className="far fa-minus-square delete-icon" onClick={props.onClickHandleRemoveFields}></i>
      <i className="far fa-window-close delete-icon" onClick={props.onClickHandleRemoveFields}></i>
    // </button>
  );
};

export default DeleteButton;