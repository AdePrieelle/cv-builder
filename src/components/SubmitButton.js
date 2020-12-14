import React from "react";

const SubmitButton = (props) => {
  return (
    <button className="submit-edit-button" onClick={props.onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
