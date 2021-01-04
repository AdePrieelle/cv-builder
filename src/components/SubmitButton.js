import React from "react";
import "../styles/SubmitButton.scss";

const SubmitButton = (props) => {
  return (
    <button className="submit-button" onClick={props.onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
