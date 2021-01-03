import React from "react";

const NameTitleDisplayMode = (props) => {
  return (
    <div className="component component-name-title">
      <div className="component-props">
        {props.inputFields.map((inputField, index) => (
          <div key={index} className="props-value-name-title">
            <div className="props-value props-value-name-title-inputname">{inputField.inputName}</div>
            <div className="props-value props-value-name-title-inputtitle">{inputField.inputTitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameTitleDisplayMode;
