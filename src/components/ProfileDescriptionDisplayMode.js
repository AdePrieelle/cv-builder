import React from "react";

const ProfileDescriptionDisplayMode = (props) => {
  return (
    <div className="component">
      <div className="component-header-display-mode component-header-display-mode-left">Profile</div>
      <div className="component-props">
        {props.inputFields.map((inputField, index) => (
          <div key={index}>
            <div className="props-value props-value-profile-description">{inputField.inputProfileDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDescriptionDisplayMode;
