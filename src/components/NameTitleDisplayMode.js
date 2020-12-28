import React from "react";

const NameTitleDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index} className="props-value-name-title">
                  <div className="props-value">{inputField.inputName}</div>
                  <div className="props-value">{inputField.inputTitle}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default NameTitleDisplayMode;