import React from "react";

const GeneralInformationDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">General information</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="form-label">Name</div>
                  <div className="props-value">{inputField.inputName}</div>
                  <div className="form-label">Email</div>
                  <div className="props-value">{inputField.inputEmail}</div>
                  <div className="form-label">Phone number</div>
                  <div className="props-value">{inputField.inputPhone}</div>
                  <div className="form-label">LinkedIn</div>
                  <div className="props-value">{inputField.inputLinkedIn}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default GeneralInformationDisplayMode;