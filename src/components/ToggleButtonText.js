import React from "react";
import ToggleButton from "./ToggleButton";
import "../styles/ToggleButtonText.scss";

const ToggleButtonText = (props) => {
  return (
    <div className="toggle-button-text">
      <div className="toggle-button-text-box toggle-button-text-box-edit">
        Edit
      </div>
      <div className="toggle-button-text-box">
        <ToggleButton changeToggleButtonState={props.changeToggleButtonState}/>
      </div>
      <div className="toggle-button-text-box toggle-button-text-box-preview">
        Preview
      </div>
    </div>
  )
}

export default ToggleButtonText;
