import React from "react";
import "../styles/PrintCvButton.scss";

const PrintCvButton = (props) => {
  return (
    <i className="fas fa-print print-icon" onClick={props.printCv}></i>
  )
}

export default PrintCvButton;
