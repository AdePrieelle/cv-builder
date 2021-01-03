import React from "react";

const EducationDisplayMode = (props) => {
  return (
    <div className="component">
      <div className="component-header-display-mode">Education</div>
      <div className="component-props component-props-education">
        {props.inputFields.map((inputField, index) => (
          <div key={index} className="education-props-values">
            <div className="props-value props-value-education-inputstudy">{inputField.inputStudy}</div>
            <div className="props-value props-value-education-inputschool">{inputField.inputSchool}</div>
            <div className="props-value props-value-education-inputdatestudy">{inputField.inputDateStudy}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationDisplayMode;
