import React from "react";

const Expertise = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">Expertise</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="props-value">{inputField.inputExpertise}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default Expertise;