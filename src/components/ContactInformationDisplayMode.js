import React from "react";

const ContactInformationDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">Contact</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="form-label">Phone</div>
                  <div className="props-value">{inputField.inputPhone}</div>
                  <div className="form-label">Mail</div>
                  <div className="props-value">{inputField.inputMail}</div>
                  <div className="form-label">Location</div>
                  <div className="props-value">{inputField.inputLocation}</div>
                  <div className="form-label">LinkedIn</div>
                  <div className="props-value">{inputField.inputLinkedIn}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default ContactInformationDisplayMode;