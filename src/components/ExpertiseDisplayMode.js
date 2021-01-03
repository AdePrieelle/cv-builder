import React from "react";

const ExpertiseDisplayMode = (props) => {
  return (
    <div className="component">
      <div className="component-header-display-mode">Expertise</div>
      <div className="component-props">
        {props.inputFields.map((inputField, index) => (
          <div key={index}>
            <div className="props-value props-value-inputexpertise">{inputField.inputExpertise}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseDisplayMode;
