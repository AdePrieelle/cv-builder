import React from "react";
import "../styles/SubmitEditButton.scss"

const SubmitButton = (props) => {
  return (
    <button className="submit-edit-button" onClick={props.onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
