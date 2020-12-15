import React from "react";

const EducationalExperienceDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">Educational Experience</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="form-label">School</div>
                  <div className="props-value">{inputField.inputSchool}</div>
                  <div className="form-label">Study</div>
                  <div className="props-value">{inputField.inputStudy}</div>
                  <div className="form-label">Date of study</div>
                  <div className="props-value">{inputField.inputDateStudy}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default EducationalExperienceDisplayMode;