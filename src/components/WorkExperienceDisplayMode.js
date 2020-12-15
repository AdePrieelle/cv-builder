import React from "react";

const WorkExperienceDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">Work Experience</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="form-label">Company</div>
                  <div className="props-value">{inputField.inputCompanyName}</div>
                  <div className="form-label">Job title</div>
                  <div className="props-value">{inputField.inputJobTitle}</div>
                  <div className="form-label">Job tasks</div>
                  <div className="props-value">{inputField.inputJobTasks}</div>
                  <div className="form-label">Job date</div>
                  <div className="props-value">{inputField.inputJobDate}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default WorkExperienceDisplayMode;