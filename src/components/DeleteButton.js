import React from "react";
import "../styles/DeleteButton.scss"

const DeleteButton = (props) => {
  return (
      <i className="far fa-window-close delete-icon" onClick={props.onClickHandleRemoveFields}></i>
  );
};

export default DeleteButton;
