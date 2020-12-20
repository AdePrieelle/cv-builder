import React from "react";

const ProfessionalExperienceDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">Professional Experience</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="props-value">{inputField.inputJobTitle}</div>
                  <div className="company-location-date">
                    <div className="props-value">{inputField.inputCompany}</div>
                    <div className="props-value">{inputField.inputJobLocation}</div>
                    <div className="props-value">{inputField.inputJobDate}</div>
                  </div>
                  <div className="props-value">{inputField.inputJobDescription}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default ProfessionalExperienceDisplayMode;