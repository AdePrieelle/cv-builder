import React from "react";

const ProfessionalExperienceDisplayMode = (props) => {
  return (
    <div className="component component-professionalexperience">
      <div className="component-header-display-mode component-header-display-mode-left">Professional Experience</div>
      <div className="component-props">
        {props.inputFields.map((inputField, index) => (
          <div key={index} className="professionalexperience-props-values">
            <div className="props-value props-value-inputjobtitle">{inputField.inputJobTitle}</div>
            <div className="company-location-date">
              <div className="props-value props-value-inputcompany">{inputField.inputCompany}</div>
              <div className="props-value props-value-inputjoblocation">{inputField.inputJobLocation}</div>
              <div className="props-value props-value-inputjobdate">{inputField.inputJobDate}</div>
            </div>
            <div className="props-value props-value-inputJobDescription">{inputField.inputJobDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperienceDisplayMode;
