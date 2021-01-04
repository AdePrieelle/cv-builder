import React from "react";
import "../styles/ToggleButton.scss";

const ToggleButton = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={props.changeToggleButtonState}/>
      <span className="slider rounded"></span>
    </label>
  )
}

export default ToggleButton;
