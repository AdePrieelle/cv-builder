import React from "react";
import "../styles/PrintCvButton.scss";

const PrintCvButton = (props) => {
  return (
    // <button onClick={props.printCv}>Print</button>
    <i className="fas fa-print print-icon" onClick={props.printCv}></i>
    // <button className="print-icon" onClick={props.printCv}>Print</button>
  )
}

export default PrintCvButton;