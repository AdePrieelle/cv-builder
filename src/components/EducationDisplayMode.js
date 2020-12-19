import React from "react";

const EducationDisplayMode = (props) => {
  return (
    <div className="component">
        <div className="component-header-display-mode">Education</div>
        <div className="component-props">
          {props.inputFields.map((inputField, index) => (
                <div key={index}>
                  <div className="props-value">{inputField.inputSchool}</div>
                  <div className="props-value">{inputField.inputStudy}</div>
                  <div className="props-value">{inputField.inputDateStudy}</div>
                </div>
            ))}
        </div>
        {/* <button type="submit" onClick={props.onClickHandleEdit}>edit</button> */}
    </div>
  );
};

export default EducationDisplayMode;